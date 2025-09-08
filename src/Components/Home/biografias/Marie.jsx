import React from 'react'
import fotoMarie from '../../../assets/fotos/biografias/marie.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Marie = () => {
  const  { t } = useTranslation();
  return (
    <NavLink>
      <div className='h-120 w-80  flex flex-col items-center relative group hover:scale-105 transition ease-in-out '>
        <div className='relative mb-4'>
          <img src={fotoMarie} alt="" className='rounded-2xl object-cover w-full border-6 border-amarelo' />
          <h1 className='absolute py-3 px-4 bg-white rounded-tr-2xl text-2xl text-vermelho font-bold font-sans z-40 bottom-0 left-0'>
            {t('periods.initialMecanic')}
          </h1>
        </div>
        <h1 className='font-serif text-4xl '>Joseph Marie</h1>
    </div>
    </NavLink>
  )
}

export default Marie