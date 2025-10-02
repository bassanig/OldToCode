import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import conteudos from '../../data/conteudos.json';
import NaoEncontrada from '../Global/NaoEncontrada';

// Importa as imagens de forma dinâmica para que o Vite possa processá-las
const images = import.meta.glob('../../assets/fotos/biografias/*.png', { eager: true });

const getImagePath = (imageName) => {
  // Constrói o caminho relativo que corresponde à chave no objeto 'images'
  const path = `../../assets/fotos/biografias/${imageName}`;
  if (images[path]) {
    return images[path].default;
  }
  // Retorna null ou uma imagem padrão se não for encontrada
  return null;
};

const BiografiaPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // Encontra a biografia correta com base no idioma e no ID da URL
  const biografia = conteudos.biografias[lang]?.find(bio => bio.id === id);

  // Se a biografia não for encontrada, exibe uma página de erro
  if (!biografia) {
    return <NaoEncontrada />;
  }

  const imageSrc = getImagePath(biografia.imagem);

  return (
    <main className="bg-gray-50 dark:bg-dark-100 py-12">
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-200 rounded-2xl shadow-lg overflow-hidden md:flex">
          <div className="md:w-5/12 flex-shrink-0">
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt={biografia.nome} 
                className="object-cover w-full h-64 md:h-full"
              />
            ) : (
              <div className="w-full h-64 md:h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500">Imagem não encontrada</span>
              </div>
            )}
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <span className="text-lg text-vermelho dark:text-amarelo-dark font-semibold tracking-wide">
              {t(biografia.periodo)}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 dark:text-white mt-1">
              {biografia.nome}
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {biografia.descricao}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BiografiaPage;
