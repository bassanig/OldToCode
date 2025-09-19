import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import Titulo from '../Global/Titulo';
import { GlobalContext } from '../Global/Context/GlobalContext';

import lightButton from '../../assets/icons/setThemeLight.svg'
import darkButton from '../../assets/icons/setThemeDark.svg'

const Conhecanos = () => {
  const { t } = useTranslation();
  const global = React.useContext(GlobalContext);

  const toggleTheme = () => {
    global.setTheme(global.theme === 'light' ? 'dark' : 'light');
  }

  return (
    <section className='container relative p-4 md:p-6'>
      <div className=''>
        <Titulo titulo={'home.conhecanos.title'}/>
        <button onClick={toggleTheme} className='absolute top-4 right-10 max-lg:hidden'>
          <img src={global.theme === 'light' ? darkButton : lightButton} alt="theme toggle" />
        </button>
      </div>
      <p className='text-xl sm:text-2xl font-sans mb-8 dark:text-cinza-dark w-full text-balance'>{t('home.conhecanos.text')}</p>
      <div className='flex justify-center sm:justify-start'>
        <NavLink to='desenvolvedores'>
          <div className='text-xl sm:text-3xl py-2 px-4 sm:py-4 sm:px-6 font-bold hover:bg-amarelo-escuro bg-amarelo rounded-2xl dark:bg-amarelo-dark dark:text-dark text-center sm:text-left'>
            {t('home.conhecanos.devButton')}
          </div>
        </NavLink>
      </div>
    </section>
  )
}

export default Conhecanos