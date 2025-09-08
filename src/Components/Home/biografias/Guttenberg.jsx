import React from 'react'
import fotoGutenberg from '../../../assets/fotos/biografias/guttenberg.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Guttenberg = () => {
  const { t } = useTranslation();
  return (
    <NavLink to='biografias/guttenberg'>
      <div className='h-120 w-80  flex flex-col items-center relative hover:scale-105 hover:cursor-pointer transition ease-in-out '>
        <div className='relative mb-4'>
          <img src={fotoGutenberg} alt="" className='rounded-2xl object-cover w-full border-6 border-amarelo' />
          <h1 className='absolute py-3 px-4 bg-white rounded-tr-2xl text-2xl text-vermelho font-bold font-sans z-40 bottom-0 left-0'>
            {t('periods.mediumMecanic')}
          </h1>
        </div>
        <h1 className='font-serif text-4xl '>Johannes Guttenberg</h1>
      </div>
    </NavLink>
  )
}

export default Guttenberg