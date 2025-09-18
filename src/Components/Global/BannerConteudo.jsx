import React from 'react'

const BannerConteudo = ({imagem, titulo}) => {
  return (
    <section className='text-white relative mb-16'>
      <div className='inset-0 bg-gradient-to-t from-black to-transparent z-20 absolute'></div>
      <img src={imagem} alt="banner de inicio" className=' w-full  object-cover' />
      <div className='w-full justify-center mx-auto relative flex bottom-10 z-40'>
        <h1 className='text-7xl font-semibold font-serif absolute bottom-3  '>{titulo}</h1>
      </div>
    </section>
  )
}

export default BannerConteudo