import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';


const FundamentosCard = ({img, index, titulo, level}) => {
  const [ t ] = useTranslation();
  return (
    <NavLink to={`/fundamentos/${titulo.toLowerCase().replace(/\s+/g, '-')}`} className={`group flex w-full max-xl:rounded-2xl max-sm:max-h-60 flex-col items-center relative overflow-hidden transition-shadow duration-300 ease-in-out ${index == 1 ? 'rounded-bl-2xl rounded-tl-2xl' : index == 3 ? 'rounded-br-2xl rounded-tr-2xl' : ''}`}>
      <div className="relative w-full overflow-hidden">
        <img src={img} alt={t(titulo)} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent'></div>
      </div>
      <div className="p-6 absolute bottom-0  w-full">
        <span className=' text-amarelo text-md rounded-full '>{t(level)}</span>
        <h1 className='text-2xl  text-gray-50 '>{t(titulo)}</h1>
      </div>
    </NavLink>
  )
}

export default FundamentosCard