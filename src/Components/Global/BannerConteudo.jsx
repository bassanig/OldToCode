import React from 'react'

const BannerConteudo = ({imagem, titulo}) => {
  return (
    <section className='text-white relative mb-16'>
      {/* container with fixed heights per breakpoint to ensure image area on mobile */}
      <div className='relative w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 lg:from-black/30 to-transparent z-20'></div>
        <img src={imagem} alt="banner de inicio" className='w-full h-full object-cover object-center' />

        <div className='absolute inset-0 z-20 flex items-center sm:items-end lg:items-center justify-center sm:justify-start lg:justify-center p-4 sm:p-8'>
          <h1 className='text-5xl lg:text-7xl xl:text-8xl  font-semibold font-serif text-center max-w-4xl mx-auto'>
            {titulo}
          </h1>
        </div>
      </div>
    </section>
  )
}

export default BannerConteudo