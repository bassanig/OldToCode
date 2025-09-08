import React from 'react'

const Banner = ({imagem, titulo, texto}) => {
  return (
    <section className='text-white relative mb-16'>
      <div className='inset-0 bg-gradient-to-t from-black to-transparent z-20 absolute'></div>
      <img src={imagem} alt="banner de inicio" className=' w-full  object-cover' />
      <div className='container mx-auto relative bottom-10 z-40'>
        <h1 className='text-7xl font-semibold font-serif absolute bottom-10  '>{titulo}</h1>
        <p className='text-white text-2xl'>{texto}</p>
      </div>
    </section>
  )
}

export default Banner