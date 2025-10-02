import React from 'react'

const Banner = ({imagem, titulo, texto}) => {
  return (
    <section className='relative text-white mb-16 h-[60vh] max-h-[720px]'>
      <div className='inset-0 bg-gradient-to-t from-black to-transparent z-10 absolute'></div>
      <img src={imagem} alt="banner de inicio" className='w-full h-full object-cover' />
      <div className='absolute bottom-8 left-0 right-0 z-20 p-4 sm:p-8 md:p-12'>
        <div className='container mx-auto'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-semibold font-serif'>{titulo}</h1>
          <p className='text-lg sm:text-xl md:text-2xl'>{texto}</p>
        </div>
      </div>
    </section>
  )
}

export default Banner