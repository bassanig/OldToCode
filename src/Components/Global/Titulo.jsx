import React from 'react'
import { useTranslation } from 'react-i18next'

const Titulo = ({titulo}) => {
  const { t } = useTranslation()
  return (
      <div className='flex items-center gap-6 max-lg:gap-2 mt-16 mb-8 max-sm:justify-center max-sm:mt-0'>
        <span className='w-2 h-20 bg-amarelo inline-block dark:bg-vermelho-dark max-sm:hidden '></span>
        <h1 className='text-7xl max-sm:text-5xl font-bold font-serif text-vermelho dark:text-amarelo-dark'>{t(titulo)}</h1>
      </div>
  )
}

export default Titulo