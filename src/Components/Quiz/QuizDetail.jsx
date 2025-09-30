import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import quizesData from '../../data/quizes.json';
import BannerConteudo from '../Global/BannerConteudo';
import fotoQuizBanner from '../../assets/banners/bannerConteudo.png';
import Titulo from '../Global/Titulo';

const QuizDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const quiz = quizesData.find((q) => q.id === id);

  if (!quiz) {
    return <div className='container mx-auto text-center text-2xl py-12 dark:text-white'>Quiz não encontrado!</div>;
  }

  return (
    <section className="mb-12">
      <BannerConteudo imagem={fotoQuizBanner} titulo={t(quiz.titleKey)} />
      <div className="max-w-fit mx-auto p-8 text-center">
        
        <div className='flex w-full justify-between items-center mb-12'>
          <h1 className='text-6xl text-gray-50 font-serif'>{t(quiz.titleKey)}</h1>
          <span className='bg-amarelo-dark px-4 py-2 rounded-2xl text-xl mx-20'>{t(quiz.levelKey)}</span>
        </div>

        <p className="text-2xl dark:text-gray-200 mb-4 max-w-3xl  text-left">{t(quiz.descriptionKey)}</p>
        {quiz.contentId && (
          <div className=" max-w-3xl text-left mb-8">
            <p className="text-gray-600 dark:text-gray-300">
              {`Você pode saber mais sobre ${t(quiz.titleKey).replace('Quiz: ', '')} `}
              <NavLink to={`/conteudo/${quiz.contentId}`} className="text-primary-500 dark:text-primary-400 hover:underline hover:text-amarelo-dark">
                aqui
              </NavLink>
              .
            </p>
          </div>
        )}
        
        <div className=''>
          <NavLink
            to={`/quizes/${id}/start`}
            className="bg-amarelo-dark transition-colors font-bold py-3 px-6 rounded-lg text-xl block w-fit"
          >
            Iniciar Quiz
          </NavLink>
        </div>



      </div>
    </section>
  );
};

export default QuizDetail;
