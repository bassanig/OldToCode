import React from 'react'
import fotoKhwarizm from '../../../assets/fotos/biografias/al-khwarizm.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Khwarizm = () => {
  const { t } = useTranslation();
  return (
    <NavLink to='biografias/al-khwarizm' className='block'>
      <div className='h-120 w-80 max-2xl:mb-12  flex flex-col items-center relative transition '>
        <div className='relative mb-4'>
          <img src={fotoKhwarizm} alt="" className='rounded-2xl object-cover w-full ' />
          <h1 className='absolute py-3 px-4 bg-gray-50 rounded-tr-2xl text-2xl text-vermelho font-bold font-sans z-40 bottom-0 left-0 dark:text-amarelo-dark dark:bg-dark'>
            {t('periods.preHistoric')}
          </h1>
        </div>
        <h1 className='font-serif text-4xl dark:text-white'>Al-kwhwarizm</h1>
      </div>
    </NavLink>
  )
}

export default Khwarizm