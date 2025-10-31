import React from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { searchIndex } from '../../data/searchIndex'; 

// Função que realiza a busca, filtrando o índice
const performSearch = (query) => {
    if (!query) return [];

    // Normaliza a query para busca case-insensitive e limpa espaços
    const normalizedQuery = query.toLowerCase().trim();

    return searchIndex.filter(item => {
        // Verifica a correspondência em Título, Descrição e Tags
        const titleMatch = item.title.toLowerCase().includes(normalizedQuery);
        const descriptionMatch = item.description.toLowerCase().includes(normalizedQuery);
        // Verifica se alguma tag contém a query
        const tagsMatch = item.tags.some(tag => tag.toLowerCase().includes(normalizedQuery));
        
        return titleMatch || descriptionMatch || tagsMatch;
    });
};

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { t } = useTranslation();
  
  // Executa a busca
  const results = React.useMemo(() => performSearch(query), [query]);

  return (
    <main className="container2 mx-auto py-12 px-4 min-h-[60vh] dark:text-white">
      <h1 className="text-4xl font-bold mb-6 text-amarelo">
        {t('search.title') || "Resultados da Pesquisa"}
      </h1>
      
      {query ? (
        <section className='bg-gray-50 dark:bg-dark p-6 rounded-xl shadow-2xl'>
          <p className='text-xl mb-6 text-gray-700 dark:text-gray-300'>
            {t('search.query_label') || "Exibindo resultados para"}: <span className="font-extrabold text-black dark:text-white italic">"{query}"</span> ({results.length} {t('search.items_found') || "itens encontrados"})
          </p>
          
          {results.length > 0 ? (
            <div className="space-y-4">
                {results.map((item) => (
                    <NavLink to={item.path} key={item.id} className="block p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 hover:ring-2 hover:ring-amarelo hover:shadow-lg transition-all duration-200 group">
                        <h3 className="text-2xl font-bold text-dark dark:text-white group-hover:text-amarelo transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-sm font-medium text-amarelo capitalize mb-2">
                            {item.category}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-base">
                            {item.description}
                        </p>
                    </NavLink>
                ))}
            </div>
          ) : (
            <p className="text-xl text-gray-700 dark:text-gray-300 mt-8">
                {t('search.no_results') || "Não foram encontrados resultados para a sua pesquisa. Tente usar termos mais abrangentes."}
            </p>
          )}

        </section>
      ) : (
        <p className="text-xl text-gray-700 dark:text-gray-300">
          {t('search.no_query') || "Utilize a caixa de busca para encontrar conteúdos sobre Biografias, Fundamentos, Cronologia e Quizes."}
        </p>
      )}
      
    </main>
  );
};

export default SearchPage;