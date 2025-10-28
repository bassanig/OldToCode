import React from 'react'
import fotoGutenberg from '../../../assets/fotos/biografias/guttenberg.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Guttenberg = () => {
  const { t } = useTranslation();
  
  return (
    <NavLink to={'/conteudo/guttenberg'} className='mb-4 block'>
      <div className='h-120 max-2xl:mb-12 w-80  flex flex-col items-center relative  hover:cursor-pointer transition ease-in-out '>
        <div className='relative mb-4'>
          <img src={fotoGutenberg} alt="" className='rounded-2xl object-cover w-full group-hover:scale-105 ' />
          <h1 className='absolute py-3 px-4 bg-gray-50 rounded-tr-2xl text-2xl text-vermelho font-bold font-sans z-40 bottom-0 left-0 dark:text-amarelo-dark dark:bg-dark'>
            {t('periods.mediumMecanic')}
          </h1>
        </div>
        <h1 className='font-serif text-4xl dark:text-white '>Johannes Guttenberg</h1>
      </div>
    </NavLink>
  )
}

export default Guttenberg