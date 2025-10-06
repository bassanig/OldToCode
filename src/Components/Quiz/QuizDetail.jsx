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
    return <div className='container mx-auto text-center text-2xl py-12 dark:text-white'>{t('quizes.quizDetail.notFound')}</div>;
  }

  let learnMoreLink = null;
  if (quiz.contentId) {
    learnMoreLink = `/conteudo/${quiz.contentId}`;
  } else if (id === 'personalidades') {
    learnMoreLink = '/biografias';
  } else if (id === 'curiosidades') {
    learnMoreLink = '/conteudo/curiosidades';
  }

  return (
    <section className="mb-12">
      <BannerConteudo imagem={fotoQuizBanner} titulo={t(quiz.titleKey)} />
      <div className="max-w-fit mx-auto p-8 text-center">
        
        <div className='flex w-full justify-between items-center mb-12'>
          <h1 className='text-6xl dark:text-gray-50  font-serif'>{t(quiz.titleKey)}</h1>
          <span className='bg-amarelo-dark px-4 py-2 rounded-2xl text-xl mx-20 max-lg:hidden'>{t(quiz.levelKey)}</span>
        </div>

        <p className="text-2xl dark:text-gray-200 mb-4 max-w-3xl  text-left">{t(quiz.descriptionKey)}</p>
        
        {learnMoreLink && (
          <div className=" max-w-3xl text-left mb-8">
            <p className="text-gray-600 dark:text-gray-300">
              {`${t('quizes.quizDetail.learnMore')} ${t(quiz.titleKey).replace('Quiz: ', '')} `}
              <NavLink to={learnMoreLink} className="text-primary-500 dark:text-primary-400 hover:underline hover:text-amarelo-dark">
                {t('quizes.quizDetail.here')}
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
            {t('quizes.quizDetail.startQuiz')}
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default QuizDetail;
