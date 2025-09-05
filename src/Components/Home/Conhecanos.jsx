import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import Titulo from '../Global/Titulo';

const Conhecanos = () => {
  const { t } = useTranslation();
  return (
    <section className='container'>
      <Titulo titulo={'home.conhecanos.title'}/>
      <p className='text-2xl font-sans mb-8'>{t('home.conhecanos.text')}</p>
     
      <div className='flex justify-start'>
        <NavLink to='desenvolvedores'><h1 className='text-3xl py-4 px-6 font-bold hover:bg-amarelo-escuro bg-amarelo rounded-2xl'>{t('home.conhecanos.devButton')}</h1></NavLink>
      </div>
    </section>
  )
}

export default Conhecanos