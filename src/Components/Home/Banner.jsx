import React from 'react'
import bannerInicio from '../../assets/banners/bannerInicio.png'

const Banner = () => {
  return (
    <section className='text-white relative'>
      <div className='inset-0 bg-gradient-to-t from-black to-transparent z-20 absolute'></div>
      <img src={bannerInicio} alt="banner de inicio" className='relative' />
      <div className='container mx-auto relative bottom-10 z-40'>
        <h1 className='text-7xl font-semibold font-serif absolute bottom-10  '>OldToCode</h1>
        <p className='text-white text-2xl'>Onde a história da computação ganha vida desde o primeiro cálculo</p>
      </div>
    </section>
  )
}

export default Banner