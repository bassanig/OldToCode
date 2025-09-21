import React from 'react'

const Texto = ({texto}) => {
  return (
    <p className='text-2xl w-full mb-4 dark:text-gray-50 max-sm:text-xl'>{texto}</p>
  )
}

export default Texto