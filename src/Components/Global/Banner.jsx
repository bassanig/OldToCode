import React from 'react'

const Banner = ({imagem, titulo, texto}) => {
  return (
    <section className='relative flex flex-col text-white mb-16 justify-items-end'>
      <div className='inset-0 bg-gradient-to-t from-black to-transparent z-20 absolute'></div>
      <img src={imagem} alt="banner de inicio" className=' w-full h-auto object-cover' />
      <div className='container absolute bottom-0 left-0 max-lg:px-4 z-40 max-md:p-4 md:p-12 '>
        <h1 className='text-7xl font-semibold font-serif max-md:text-5xl   max-lg:text-6xl'>{titulo}</h1>
        <p className='text-white text-2xl max-lg:text-xl max-md:text-lg'>{texto}</p>
      </div>
    </section>
  )
}

export default Banner