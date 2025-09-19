import React from 'react'

const LinkCircular = ({imagem, titulo, topico}) => {
  return (
    <div className='flex gap-4 cursor-pointer '>
      <img src={imagem} alt="" className='rounded-full' />
      <div className='flex flex-col justify-center '>
        <span className='text-xl'>{topico}</span>
        <h2 className='text-3xl'>{titulo}</h2>
      </div>
    </div>
  )
}

export default LinkCircular