import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import biografias from '../../data/biografias.json';
import NaoEncontrada from '../Global/NaoEncontrada';

const BiografiaIndividual = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const biografia = biografias[id];
  
  if (!biografia) {
    return <NaoEncontrada />;
  }

  const bioData = biografia[lang] || biografia.pt;

  return (
    <main className="bg-gray-50 dark:bg-dark-100 min-h-screen">
      <div 
        className="relative h-32 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.8), rgba(160, 82, 45, 0.8)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><defs><pattern id="paper" patternUnits="userSpaceOnUse" width="100" height="100"><rect width="100" height="100" fill="%23D2B48C"/><circle cx="20" cy="20" r="2" fill="%23CD853F" opacity="0.3"/><circle cx="80" cy="60" r="1.5" fill="%23A0522D" opacity="0.2"/></pattern></defs><rect width="100%" height="100%" fill="url(%23paper)"/></svg>')`
        }}
      >
        <h1 className="text-5xl font-bold text-white tracking-wider">
          BIOGRAFIA
        </h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-200 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-pink-100 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
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
              
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-red-800 dark:text-red-400 mb-3">
                  {bioData.nome}
                </h2>
                <div className="flex items-start">
                  <div className="text-6xl text-orange-500 mr-3 leading-none">"</div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed pt-2">
                    {bioData.citacao}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {bioData.biografia.map((paragrafo, index) => {
                if (paragrafo.type === 'paragraph') {
                  return (
                    <p 
                      key={index} 
                      className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-justify"
                      style={{ textAlign: 'justify', lineHeight: '1.6' }}
                    >
                      {paragrafo.text}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/biografias"
            className="inline-flex items-center px-6 py-3 bg-red-800 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            <svg
              className="mr-2 w-5 h-5 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            {lang === 'pt' ? 'Voltar às Biografias' : 'Back to Biographies'}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BiografiaIndividual;
