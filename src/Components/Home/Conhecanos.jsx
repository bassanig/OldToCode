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
    <section className='container relative'>
      <div className=''>
        <Titulo titulo={'home.conhecanos.title'}/>
        <button onClick={toggleTheme} className='absolute top-4 right-10'>
          <img src={global.theme === 'light' ? darkButton : lightButton} alt="" />
        </button>
      </div>
      <p className='text-2xl font-sans mb-8 dark:text-cinza-dark w-full text-balance '>{t('home.conhecanos.text')}</p>
     
      <div className='flex justify-start'>
        <NavLink to='desenvolvedores'><h1 className='text-3xl py-4 px-6 font-bold hover:bg-amarelo-escuro bg-amarelo rounded-2xl dark:bg-amarelo-dark dark:text-dark'>{t('home.conhecanos.devButton')}</h1></NavLink>
      </div>
    </section>
  )
}

export default Conhecanos