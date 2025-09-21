import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';


const FundamentosCard = ({img, index, titulo, level}) => {
  const [ t ] = useTranslation();
  return (
    <NavLink className='flex gap-4 w-full flex-col items-center relative overflow-hidden'>
      <div className={`max-xl:rounded-2xl relative w-full overflow-hidden ${index == 1 ? 'rounded-bl-2xl rounded-tl-2xl' : index == 3 ? 'rounded-tr-2xl rounded-br-2xl': ''}`}>
        <img src={img} alt="" className={`hover:scale-105 duration-300 w-full max-h-70 object-cover `} />
        <div className='absolute dark:bg-dark bg-gray-50 px-4 py-2 block top-0 left-0 rounded-br-2xl'>
            <span className='text-2xl text-vermelho dark:text-amarelo-dark'>{t(level)}</span>
        </div>
      </div>
      <h1 className='text-4xl font-serif max-xl:hidden dark:text-gray-50 text-dark'>{t(titulo)}</h1>
    </NavLink>
  )
}

export default FundamentosCard