import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import quizesData from '../../data/quizes.json';
import BannerConteudo from '../Global/BannerConteudo';
import fotoQuizBanner from '../../assets/banners/bannerConteudo.png';

const Quiz = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const quiz = quizesData.find((q) => q.id === id);

  if (!quiz) {
    return <div className='container mx-auto text-center text-2xl py-12 dark:text-white'>Quiz não encontrado!</div>;
  }

  return (
    <section>
      <BannerConteudo imagem={fotoQuizBanner} titulo={t(quiz.titleKey)} />
      <div className="container mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold dark:text-white">O quiz &quot;{t(quiz.titleKey)}&quot; começa aqui!</h2>
        {/* A implementação do quiz virá aqui */}
      </div>
    </section>
  );
};

export default Quiz;
