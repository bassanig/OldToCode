import React from 'react'
import fotoWatt from '../../../assets/fotos/biografias/watt.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Watt = () => {
  const { t } = useTranslation();
  return (
    <NavLink>
    <div className='h-120 w-80  flex flex-col items-center relative transition hover:scale-105'>
      <div className='relative mb-4'>
        <img src={fotoWatt} alt="" className='rounded-2xl object-cover w-full border-6 border-amarelo' />
        <h1 className='absolute py-3 px-4 bg-white rounded-tr-2xl text-2xl text-vermelho font-bold font-sans z-40 bottom-0 left-0'>
          {t('periods.preIncialMecanic')}
        </h1>
      </div>
      <h1 className='font-serif text-4xl '>James Watt</h1>
    </div>
    </NavLink>
  )
}

export default Watt