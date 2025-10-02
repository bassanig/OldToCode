import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import biografias from '../../data/biografias.json';
import conteudos from '../../data/conteudos.json';

const GlobalSearch = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState({ biografias: [], conteudos: [] });
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchTerm.length >= 2) {
      performSearch(searchTerm);
    } else {
      setResults({ biografias: [], conteudos: [] });
    }
  }, [searchTerm, lang]);

  const performSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    
    const biografiasResults = Object.entries(biografias)
      .filter(([key, biografia]) => {
        const bioData = biografia[lang] || biografia.pt;
        return bioData.nome.toLowerCase().includes(lowerQuery) ||
               bioData.citacao.toLowerCase().includes(lowerQuery);
      })
      .slice(0, 3);

    const conteudosResults = Object.entries(conteudos)
      .filter(([key, conteudo]) => {
        const contentData = conteudo[lang] || conteudo.pt;
        return contentData.titulo.toLowerCase().includes(lowerQuery);
      })
      .slice(0, 3);

    setResults({
      biografias: biografiasResults,
      conteudos: conteudosResults
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="flex items-start justify-center pt-20 px-4">
        <div 
          className="bg-white dark:bg-dark-200 rounded-2xl shadow-2xl w-full max-w-2xl max-h-96 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder={lang === 'pt' ? 'Buscar biografias e conteúdos...' : 'Search biographies and content...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full px-4 py-3 pl-12 text-lg rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-dark-100 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-vermelho dark:focus:ring-amarelo-dark"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <button
                onClick={onClose}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {searchTerm.length >= 2 ? (
              <div className="p-6">
                {results.biografias.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      {lang === 'pt' ? 'Biografias' : 'Biographies'}
                    </h3>
                    <div className="space-y-2">
                      {results.biografias.map(([key, biografia]) => {
                        const bioData = biografia[lang] || biografia.pt;
                        return (
                          <Link
                            key={key}
                            to={`/biografia/${key}`}
                            onClick={onClose}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors group"
                          >
                            <img
                              src={`/images/biografias/${bioData.imagem}`}
                              alt={bioData.nome}
                              className="w-10 h-10 rounded-full object-cover mr-3"
                              onError={(e) => {
                                e.target.src = '/images/biografias/default.jpg';
                              }}
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-vermelho dark:group-hover:text-amarelo-dark">
                                {bioData.nome}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                {bioData.citacao}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {results.conteudos.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      {lang === 'pt' ? 'Conteúdos' : 'Content'}
                    </h3>
                    <div className="space-y-2">
                      {results.conteudos.map(([key, conteudo]) => {
                        const contentData = conteudo[lang] || conteudo.pt;
                        return (
                          <Link
                            key={key}
                            to={`/conteudo/${key}`}
                            onClick={onClose}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-vermelho dark:bg-amarelo-dark flex items-center justify-center mr-3">
                              <svg className="w-5 h-5 text-white dark:text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-vermelho dark:group-hover:text-amarelo-dark">
                                {contentData.titulo}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {lang === 'pt' ? 'Conteúdo educacional' : 'Educational content'}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {results.biografias.length === 0 && results.conteudos.length === 0 && (
                  <div className="text-center py-8">
                    <svg className="mx-auto w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400">
                      {lang === 'pt' ? 'Nenhum resultado encontrado' : 'No results found'}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-6 text-center">
                <svg className="mx-auto w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400">
                  {lang === 'pt' ? 'Digite pelo menos 2 caracteres para buscar' : 'Type at least 2 characters to search'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
