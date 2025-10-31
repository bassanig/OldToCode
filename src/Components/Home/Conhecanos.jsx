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
    <section className='container relative px-4 md:px-8 mb-12'>
      <div className=''>
        <Titulo titulo={'home.conhecanos.title'}/>
        <button onClick={toggleTheme} className='absolute top-4 right-10 max-lg:hidden'>
          <img src={global.theme === 'light' ? darkButton : lightButton} alt="theme toggle" />
        </button>
      </div>
          <p className='text-xl sm:text-2xl font-sans mb-8 dark:text-cinza-dark w-full text-balance max-sm:hidden'>{t('home.conhecanos.text')}</p>
          <p className='text-xl sm:text-2xl font-sans mb-8 dark:text-cinza-dark w-full text-balance sm:hidden'>{t('home.conhecanos.textShort')}</p>
      <div className='flex justify-center justify-start'>
        <NavLink to='desenvolvedores' className=' text-2xl  px-6 py-3 font-bold max-sm:text-xl max-sm:py-2 max-sm:px-4 hover:bg-amarelo-escuro bg-amarelo rounded-2xl dark:bg-amarelo-dark dark:text-dark'>
            {t('home.conhecanos.devButton')}
        </NavLink>
      </div>
    </section>
  )
}

export default Conhecanos