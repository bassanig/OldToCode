import React from 'react'

import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const CronologiaCard = ({foto, titulo, subtitulo}) => {
  const [ t ] = useTranslation();
  return (
    <NavLink className='rounded-2xl overflow-hidden relative'>
      <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent'></div>
      <img src={foto} alt="" className='object-cover h-full w-full'/>
      <div className='absolute bottom-0 px-12 py-6 flex flex-col gap-2'>
        <h1 className='text-gray-50 max-xl:text-4xl text-5xl font-serif font-bold'>{t(titulo).toUpperCase()}</h1>
        <span className='text-gray-300'>{t(subtitulo)}</span>
      </div>
    </NavLink>
  )
}

export default CronologiaCard