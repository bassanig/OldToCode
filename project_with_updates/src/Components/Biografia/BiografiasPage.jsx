import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import biografias from '../../data/biografias.json';

const BiografiasPage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBiografias = useMemo(() => {
    if (!searchTerm) {
      return Object.entries(biografias);
    }
    
    return Object.entries(biografias).filter(([key, biografia]) => {
      const bioData = biografia[lang] || biografia.pt;
      return bioData.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
             bioData.citacao.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm, lang]);

  return (
    <main className="bg-gray-50 dark:bg-dark-100 min-h-screen">
      <div 
        className="relative h-32 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.8), rgba(160, 82, 45, 0.8)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><defs><pattern id="paper" patternUnits="userSpaceOnUse" width="100" height="100"><rect width="100" height="100" fill="%23D2B48C"/><circle cx="20" cy="20" r="2" fill="%23CD853F" opacity="0.3"/><circle cx="80" cy="60" r="1.5" fill="%23A0522D" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(%23paper)"/></svg>')`
        }}
      >
        <h1 className="text-5xl font-bold text-white tracking-wider">
          BIOGRAFIAS
        </h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filteredBiografias.map(([key, biografia]) => {
            const bioData = biografia[lang] || biografia.pt;
            return (
              <Link
                key={key}
                to={`/biografia/${key}`}
                className="block"
              >
                <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-lg p-4 flex items-center space-x-4 hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                      <img
                        src={`/images/biografias/${bioData.imagem}`}
                        alt={bioData.nome}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = '/images/biografias/default.jpg';
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-white">
                    <h3 className="font-bold text-lg mb-1">
                      {bioData.nome}
                    </h3>
                    <p className="text-sm opacity-90 leading-relaxed line-clamp-3">
                      {bioData.citacao}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default BiografiasPage;
