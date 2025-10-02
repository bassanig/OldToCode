import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Fuse from 'fuse.js';
import conteudos from '../../data/conteudos.json'; // Adjust the path as needed

const SearchPage = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [location.search]);

  const performSearch = (query) => {
    const fuseOptions = {
      keys: ['title', 'content', 'tags'],
      includeScore: true,
      threshold: 0.4,
    };

    const allContent = Object.values(conteudos).flat();
    const fuse = new Fuse(allContent, fuseOptions);
    const searchResults = fuse.search(query);
    setResults(searchResults.map(result => result.item));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{t('search.title')}</h1>
      <form onSubmit={handleSearch} className="flex items-center mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t('search.placeholder')}
          className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:text-white"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md ml-2">
          {t('search.button')}
        </button>
      </form>

      <div>
        {results.length > 0 ? (
          results.map((item, index) => (
            <div key={index} className="p-4 mb-4 border rounded-md dark:bg-gray-800">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.content}</p>
            </div>
          ))
        ) : (
          <p>{t('search.noResults')}</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
