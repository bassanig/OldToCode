import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import conteudos from '../../../data/conteudos.json';
import TituloTexto from '../TipografiaPaginas/TituloTexto';
import fotoAlgoritmos from '../../../assets/fotos/fundamentos/algoritmos2.png'

const CronologiaMenu = ({ setShowCronologia }) => {
  const { t, i18n } = useTranslation();

  const cronologiaKeys = Object.keys(conteudos).filter(key => key.startsWith('cronologia-'));

  return (
    <div className="w-full bg-gray-50 absolute z-30 dark:bg-dark animate-slideDown py-8 flex justify-center">
      <div className=' mx-auto flex max-w-fit gap-8'>
        <div className='flex flex-col justify-start'>
          <h1 className='text-5xl text-vermelho font-serif font-bold mb-4 dark:text-amarelo-dark'>{t('header.nav.chronology')}</h1>
          <ul className="flex flex-col gap-4 py-2">
            {cronologiaKeys.map(key => (
              <li key={key}>
                <NavLink
                  to={`/conteudo/${key}`}
                  className="block px-1 py-2 text-lg text-dark dark:text-gray-200 hover:text-amarelo dark:hover:text-amarelo"
                  onClick={() => setShowCronologia(false)}
                >
                  {conteudos[key][i18n.language]?.titulo || conteudos[key]['pt'].titulo}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col relative gap-4 pb-4 px-6'>
          <h1 className='text-xl text-vermelho pt-3 dark:text-amarelo-dark'>{t('others')}</h1>
          <button onClick={() => setShowCronologia(false)} className='absolute cursor-pointer top-3 right-0 w-9 h-9 rounded-full border-2 dark:border-amarelo-dark border-vermelho flex items-center justify-center'>
            <span className='absolute w-5 h-0.5 bg-vermelho rounded-2xl -rotate-45 dark:bg-amarelo-dark'></span>
            <span className='absolute w-5 h-0.5 bg-vermelho rounded-2xl rotate-45 dark:bg-amarelo-dark'></span>
          </button>
          <div className='flex gap-4 pt-4'>
            <NavLink to='/conteudo/cronologia-pre-historia' className='overflow-hidden block max-w-[400px] rounded-2xl relative border-gray-50 shadow-md dark:shadow-2xl'>
              <img src={fotoAlgoritmos} alt="" className='object-cover h-full w-full'/>
              <div className='absolute flex flex-col gap-2 bg-gray-50 dark:bg-dark bottom-0 left-0 w-full px-6 py-4 border-6 border-gray-50 dark:border-dark'>
                <h1 className='text-2xl dark:text-gray-50'>{t('home.logicFundamentals.algorithms.title')}</h1>
                <span className='text-md dark:text-gray-50'>{t('home.logicFundamentals.algorithms.description')}</span>
              </div>
            </NavLink>
            <NavLink className='overflow-hidden block max-w-[400px] rounded-2xl relative border-gray-50 shadow-md dark:shadow-2xl'>
              <img src={fotoAlgoritmos} alt="" className='object-cover h-full w-full'/>
              <div className='absolute flex flex-col gap-2 bg-gray-50 dark:bg-dark bottom-0 left-0 w-full px-6 py-4 border-6 border-gray-50 dark:border-dark'>
                <h1 className='text-2xl dark:text-gray-50'>{t('home.logicFundamentals.algorithms.title')}</h1>
                <span className='text-md dark:text-gray-50'>{t('home.logicFundamentals.algorithms.description')}</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CronologiaMenu;