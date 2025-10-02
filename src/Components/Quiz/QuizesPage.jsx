import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BannerConteudo from '../Global/BannerConteudo';
import fotoQuizBanner from '../../assets/banners/bannerConteudo.png';
import quizesData from '../../data/quizes.json';

// Import images
import fundamentoLogicoImg from '../../assets/quizes/fundamentoLogico.png';
import representacaoDadosImg from '../../assets/quizes/representacaoDados.png';
import algoritmosImg from '../../assets/quizes/algoritmos.png';
import personalidadesImg from '../../assets/quizes/personalidades.png';
import curiosidadesImg from '../../assets/quizes/curiosidades.png';

const quizImages = {
  'fundamentoLogico.png': fundamentoLogicoImg,
  'representacaoDados.png': representacaoDadosImg,
  'algoritmos.png': algoritmosImg,
  'personalidades.png': personalidadesImg,
  'curiosidades.png': curiosidadesImg,
};

const QuizesPage = () => {
  const [t] = useTranslation();
  const totalQuizes = quizesData.length;
  const itemsInLastRow = totalQuizes % 3;

  return (
    <section className='mb-20'>
      <BannerConteudo imagem={fotoQuizBanner} titulo='Quizes'/>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-12 mt-12'>
          {quizesData.map((quiz, index) => {
            let gridClasses = 'md:col-span-2';
            const firstIndexOfLastRow = totalQuizes - itemsInLastRow;

            if (itemsInLastRow !== 0 && index === firstIndexOfLastRow) {
              if (itemsInLastRow === 2) {
                gridClasses += ' md:col-start-2';
              } else if (itemsInLastRow === 1) {
                gridClasses += ' md:col-start-3';
              }
            }

            return (
              <div key={quiz.id} className={`${gridClasses} shadow-lg overflow-hidden rounded-xl`}>
                <NavLink to={`/quizes/${quiz.id}`} className='overflow-hidden rounded-xl block relative group'>
                  <div className='inset-0 bg-gradient-to-t from-black to-transparent z-20 absolute'></div>
                  <img src={quizImages[quiz.image]} alt={t(quiz.titleKey)} className='object-cover w-full h-full group-hover:scale-105 transition ease-in-out duration-300'/>
                  <div className='absolute bottom-0 z-50 w-full pt-6'>
                    <span className=' z-50 text-xl py-2 mx-4 bg-amarelo-dark rounded-lg px-4'>{t(quiz.levelKey)}</span>
                    <h1 className=' z-50 text-2xl py-4 px-6 text-gray-50'>{t(quiz.titleKey)}</h1>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuizesPage;