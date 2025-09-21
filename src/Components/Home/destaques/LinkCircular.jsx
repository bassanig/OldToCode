import React from 'react'

const LinkCircular = ({imagem, titulo, topico, periodo}) => {
  return (
    <div className='flex gap-4 cursor-pointer py-4'>
      <img src={imagem} alt="" className='rounded-full object-cover size-30 max-sm:size-20' />
      <div className='flex flex-col justify-center '>
        <span className='text-lg text-vermelho dark:text-amarelo-dark'>{topico}</span>
        <h2 className='text-xl text-balance dark:text-gray-50 max-sm:text-lg'>{titulo}</h2>
        <span className='text-md mt-1 dark:text-gray-50 flex items-center gap-2 '><span className='size-2 bg-amarelo block rounded-full'></span>{periodo}</span>
      </div>
    </div>
  )
}

export default LinkCircular