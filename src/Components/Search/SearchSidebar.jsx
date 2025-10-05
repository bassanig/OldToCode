import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { searchIndex } from '../../data/searchIndex'

// Função que realiza a busca, filtrando o índice
const performSearch = (query) => {
  if (!query) return []

  const normalizedQuery = query.toLowerCase().trim()

  return searchIndex.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(normalizedQuery)
    const descriptionMatch = item.description.toLowerCase().includes(normalizedQuery)
    const tagsMatch = item.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
    
    return titleMatch || descriptionMatch || tagsMatch
  })
}

const SearchSidebar = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [results, setResults] = React.useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const inputRef = React.useRef(null)

  // Foca no input quando a aba é aberta
  React.useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Atualiza os resultados quando a query muda
  React.useEffect(() => {
    if (searchQuery.trim()) {
      const searchResults = performSearch(searchQuery)
      setResults(searchResults)
    } else {
      setResults([])
    }
  }, [searchQuery])

  // Função para lidar com a busca ao pressionar Enter
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const searchResults = performSearch(searchQuery)
      setResults(searchResults)
    }
  }

  // Função para navegar até o conteúdo
  const handleResultClick = (path) => {
    // Fecha a aba de busca
    onClose()
    
    // Navega para o caminho
    navigate(path)
    
    // Scroll suave até o topo após navegação
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  // Fecha a aba com ESC
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <>
      {/* Overlay de fundo */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-[90] transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Aba lateral de resultados */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white dark:bg-gray-900 shadow-2xl z-[95] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-6 space-y-6">
          {/* Cabeçalho com botão de fechar */}
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('search.title') || 'Pesquisa'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors p-2"
              aria-label="Fechar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Caixa de busca */}
          <form onSubmit={handleSearch} className="relative">
            <input
              ref={inputRef}
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('search.placeholder') || 'Digite sua busca...'}
              className="w-full py-3 pl-4 pr-12 text-base text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-transparent focus:border-amarelo focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amarelo dark:text-gray-400 dark:hover:text-amarelo transition-colors"
              aria-label="Pesquisar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>

          {/* Resultados da pesquisa */}
          <div className="space-y-4">
            {searchQuery.trim() ? (
              <>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {results.length} {t('search.items_found') || 'resultados encontrados'}
                </p>
                
                {results.length > 0 ? (
                  <div className="space-y-3">
                    {results.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleResultClick(item.path)}
                        className="w-full text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:ring-2 hover:ring-amarelo hover:shadow-lg transition-all duration-200 group"
                      >
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amarelo transition-colors mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs font-medium text-amarelo capitalize mb-2">
                          {item.category}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          {item.description}
                        </p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 dark:text-gray-400">
                      {t('search.no_results') || 'Nenhum resultado encontrado'}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400">
                  {t('search.no_query') || 'Digite algo para começar a busca'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchSidebar
