import React from 'react'

const TituloTexto = ({texto}) => {
  return (
    <h1 className='text-6xl font-bold font-serif text-vermelho mb-8 mt-12 dark:text-amarelo-dark'>{texto}</h1>
  )
}

export default TituloTexto