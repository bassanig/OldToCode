import React, { useState, useEffect, useCallback } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import quizesData from '../../data/quizes.json';
import quizQuestions from '../../data/quiz-questions.json';
import BannerConteudo from '../Global/BannerConteudo';
import fotoQuizBanner from '../../assets/banners/bannerConteudo.png';

// Score Bar Component
const ScoreBar = ({ score, total }) => {
  const { t } = useTranslation();
  const percentage = total > 0 ? (score / total) * 100 : 0;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium dark:text-white">{t('quizes.quiz.score')}</h3>
        <span className="text-lg font-medium dark:text-gray-300">{score} / {total}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};


const Quiz = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const [quizInfo, setQuizInfo] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleRestartQuiz = useCallback(() => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
    setScore(0);
    setShowResults(false);
  }, []);

  useEffect(() => {
    const currentQuizInfo = quizesData.find((q) => q.id === id);
    const currentQuestions = quizQuestions[id] || [];
    setQuizInfo(currentQuizInfo);
    setQuestions(currentQuestions);
    // Reset state when quiz changes
    handleRestartQuiz();
  }, [id, handleRestartQuiz]);

  const handleAnswerSelect = (option) => {
    if (selectedAnswer) return; // Prevent changing the answer

    const correctAnswer = questions[currentQuestionIndex].answer[lang];
    const isCorrect = option === correctAnswer;

    setSelectedAnswer(option);
    setIsAnswerCorrect(isCorrect);

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const getButtonClass = (option) => {
    if (!selectedAnswer) {
      return 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600';
    }
    const correctAnswer = questions[currentQuestionIndex].answer[lang];
    if (option === correctAnswer) {
      return 'bg-green-500 text-white'; // Correct answer is always green
    }
    if (option === selectedAnswer && !isAnswerCorrect) {
      return 'bg-red-500 text-white'; // Selected wrong answer is red
    }
    return 'bg-gray-200 dark:bg-gray-700'; // Other options are muted
  };

  if (!quizInfo) {
    return <div className='container mx-auto text-center text-2xl py-12 dark:text-white'>{t('quizes.quiz.loading')}</div>;
  }

  if (questions.length === 0) {
    return (
      <section>
        <BannerConteudo imagem={fotoQuizBanner} titulo={t(quizInfo.titleKey)} />
        <div className="container mx-auto p-8 text-center">
          <h2 className="text-2xl font-bold dark:text-white mb-4">{t('quizes.quiz.comingSoon')}</h2>
          <p className="text-lg dark:text-gray-300">{t('quizes.quiz.noQuestions')}</p>
        </div>
      </section>
    );
  }

  if (showResults) {
    return (
      <section>
        <BannerConteudo imagem={fotoQuizBanner} titulo={`${t('quizes.quiz.result')} ${t(quizInfo.titleKey)}`} />
        <div className="container mx-auto p-8 text-center my-60z">
          <h2 className="text-3xl font-bold dark:text-white mb-4">{t('quizes.quiz.quizFinished')}</h2>
          <p className="text-2xl dark:text-gray-200 mb-8">{t('quizes.quiz.yourScore', { score: score, total: questions.length })}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={handleRestartQuiz} className="bg-amarelo-dark hover:bg-amarelo-normal text-black font-bold py-3 px-6 rounded-lg">
              {t('quizes.quiz.tryAgain')}
            </button>
            <NavLink to="/quizes" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg">
              {t('quizes.quiz.seeOtherQuizzes')}
            </NavLink>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <section>
      <BannerConteudo imagem={fotoQuizBanner} titulo={t(quizInfo.titleKey)} />
      <div className="container mx-auto p-8">
        <div className="max-w-3xl mx-auto">
          
          <ScoreBar score={score} total={questions.length} />

          <div className="text-center mb-4">
            <p className="text-xl dark:text-gray-300">{t('quizes.quiz.question', { current: currentQuestionIndex + 1, total: questions.length })}</p>
          </div>
          <h2 className="text-2xl font-bold dark:text-white text-center mb-8">{currentQuestion.question[lang]}</h2>
          <div className="flex flex-col gap-4">
            {currentQuestion.options[lang].map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={!!selectedAnswer}
                className={`p-4 rounded-lg text-left dark:text-gray-50 transition-colors duration-300 ${getButtonClass(option)}`}
              >
                {option}
              </button>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={handleNextQuestion} 
              disabled={!selectedAnswer}
              className="bg-amarelo-dark hover:bg-amarelo-normal text-black font-bold py-3 px-6 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {currentQuestionIndex < questions.length - 1 ? t('quizes.quiz.nextQuestion') : t('quizes.quiz.finish')}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Quiz;
