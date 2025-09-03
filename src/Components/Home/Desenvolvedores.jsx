import React from 'react'
import Banner from '../Global/Banner'
import bannerDesenvolvedores from '../../assets/banners/bannerDesenvolvedores.png'

import fotoBassani from '../../assets/fotos/bassani.jpg'
import instagramIcon from '../../assets/icons/Instagram.svg'
import linkedinIcon from '../../assets/icons/LinkedIn.svg'
import xIcon from '../../assets/icons/X.svg'
import githubIcon from '../../assets/icons/GitHub.svg'

const Desenvolvedores = () => {
  return (
    <>
      <Banner imagem={bannerDesenvolvedores} titulo={'Conheça-nos'} />
      <section className='container my-20'>
        <div className='flex flex-wrap max-w-[1200px] gap-32 mx-auto justify-center text-center '>
          <div className=' w-64 bg-vermelho flex flex-col items-center p-8 border-amarelo border-4'>
            <img src={fotoBassani} alt=""  className='size-40 rounded-full object-cover mb-4'/>
            <h1 className='text-amarelo text-2xl font-bold font-serif mb-4 '>Guilherme Bassani</h1>
            <p className='text-white text-balance '>O menino mais lindo de toda a Etec Sebrae, dono do João Vitor Daniele Araujo e detentor do menor Q.I da Santa Cecília</p>
            <div className='flex gap-4 mt-4'>
              <a href="https://www.reddit.com/r/funny/comments/f0vkqk/i_photoshopped_a_gorilla_into_an_eggplant_for/?tl=pt-br"><img src={xIcon} alt="" /></a>
              <a href="https://www.instagram.com/bassanig/"><img src={instagramIcon} alt="" /></a>
              <a href="https://www.linkedin.com/in/guilherme-bassani-6b707226a/"><img src={linkedinIcon} alt="" /></a>
              <a href="https://github.com/bassanig"><img src={githubIcon} alt="" /></a>
            </div>
          </div>
          <div className=' w-64 bg-vermelho flex flex-col items-center p-8 border-amarelo border-4'>
            <img src={fotoBassani} alt=""  className='size-40 rounded-full object-cover mb-4'/>
            <h1 className='text-amarelo text-2xl font-bold font-serif mb-4 '>Guilherme Bassani</h1>
            <p className='text-white text-balance'>O menino mais lindo de toda a Etec Sebrae, dono do João Vitor Daniele Araujo e detentor do menor Q.I da Santa Cecília</p>
            <div className='flex gap-4 mt-4'>
              <a href="https://www.reddit.com/r/funny/comments/f0vkqk/i_photoshopped_a_gorilla_into_an_eggplant_for/?tl=pt-br"><img src={xIcon} alt="" /></a>
              <a href="https://www.instagram.com/bassanig/"><img src={instagramIcon} alt="" /></a>
              <a href="https://www.linkedin.com/in/guilherme-bassani-6b707226a/"><img src={linkedinIcon} alt="" /></a>
              <a href="https://github.com/bassanig"><img src={githubIcon} alt="" /></a>
            </div>
          </div>
            <div className=' w-64 bg-vermelho flex flex-col items-center p-8 border-amarelo border-4'>
            <img src={fotoBassani} alt=""  className='size-40 rounded-full object-cover mb-4'/>
            <h1 className='text-amarelo text-2xl font-bold font-serif mb-4 '>Guilherme Bassani</h1>
            <p className='text-white text-balance'>O menino mais lindo de toda a Etec Sebrae, dono do João Vitor Daniele Araujo e detentor do menor Q.I da Santa Cecília</p>
            <div className='flex gap-4 mt-4'>
              <a href="https://www.reddit.com/r/funny/comments/f0vkqk/i_photoshopped_a_gorilla_into_an_eggplant_for/?tl=pt-br"><img src={xIcon} alt="" /></a>
              <a href="https://www.instagram.com/bassanig/"><img src={instagramIcon} alt="" /></a>
              <a href="https://www.linkedin.com/in/guilherme-bassani-6b707226a/"><img src={linkedinIcon} alt="" /></a>
              <a href="https://github.com/bassanig"><img src={githubIcon} alt="" /></a>
            </div>
          </div>
          <div className=' w-64 bg-vermelho flex flex-col items-center p-8 border-amarelo border-4'>
            <img src={fotoBassani} alt=""  className='size-40 rounded-full object-cover mb-4'/>
            <h1 className='text-amarelo text-2xl font-bold font-serif mb-4 '>Guilherme Bassani</h1>
            <p className='text-white text-balance'>O menino mais lindo de toda a Etec Sebrae, dono do João Vitor Daniele Araujo e detentor do menor Q.I da Santa Cecília</p>
            <div className='flex gap-4 mt-4'>
              <a href="https://www.reddit.com/r/funny/comments/f0vkqk/i_photoshopped_a_gorilla_into_an_eggplant_for/?tl=pt-br"><img src={xIcon} alt="" /></a>
              <a href="https://www.instagram.com/bassanig/"><img src={instagramIcon} alt="" /></a>
              <a href="https://www.linkedin.com/in/guilherme-bassani-6b707226a/"><img src={linkedinIcon} alt="" /></a>
              <a href="https://github.com/bassanig"><img src={githubIcon} alt="" /></a>
            </div>
          </div>
          <div className=' w-64 bg-vermelho flex flex-col items-center p-8 border-amarelo border-4'>
            <img src={fotoBassani} alt=""  className='size-40 rounded-full object-cover mb-4'/>
            <h1 className='text-amarelo text-2xl font-bold font-serif mb-4 '>Guilherme Bassani</h1>
            <p className='text-white text-balance'>O menino mais lindo de toda a Etec Sebrae, dono do João Vitor Daniele Araujo e detentor do menor Q.I da Santa Cecília</p>
            <div className='flex gap-4 mt-4'>
              <a href="https://www.reddit.com/r/funny/comments/f0vkqk/i_photoshopped_a_gorilla_into_an_eggplant_for/?tl=pt-br"><img src={xIcon} alt="" /></a>
              <a href="https://www.instagram.com/bassanig/"><img src={instagramIcon} alt="" /></a>
              <a href="https://www.linkedin.com/in/guilherme-bassani-6b707226a/"><img src={linkedinIcon} alt="" /></a>
              <a href="https://github.com/bassanig"><img src={githubIcon} alt="" /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Desenvolvedores