import React from 'react'

import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Card = ({epoca, foto, nome}) => {
  const { t } = useTranslation();
  
  return (
    <NavLink to='biografias/guttenberg'>
      <div className='h-120 w-80  flex flex-col items-center relative  hover:cursor-pointer transition ease-in-out '>
        <div className='relative mb-4'>
          <img src={foto} alt="" className='object-cover w-full' />
          <div className='absolute w-full -bottom-5 bg-gray-200 flex flex-col gap-4 px-4 py-4'>
            <span className='text-vermelho'>
              {t(epoca).toUpperCase()}
            </span>
            <h1 className='text-3xl text'>{nome}</h1>
          </div>
        </div>

      </div>
    </NavLink>
  )
}

export default Card