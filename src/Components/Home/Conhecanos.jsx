import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const Conhecanos = () => {
  const { t } = useTranslation();
  return (
    <section className='container'>
      <div className='flex items-center gap-6 mt-16 mb-8'>
        <span className='w-2 h-20 bg-amarelo inline-block'></span>
        <h1 className='text-7xl font-bold font-serif text-vermelho'>{t('home.conhecanos.title')}</h1>
      </div>
      <p className='text-2xl font-sans mb-8'>{t('home.conhecanos.text')}</p>
     
      <div className='flex justify-start mb-40'>
        <NavLink to='desenvolvedores'><h1 className='text-3xl py-4 px-6 font-bold hover:bg-amarelo-escuro bg-amarelo rounded-2xl'>{t('home.conhecanos.devButton')}</h1></NavLink>
      </div>
    </section>
  )
}

export default Conhecanos