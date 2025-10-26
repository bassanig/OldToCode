import React from 'react'
import Banner from '../Global/Banner'
import bannerDesenvolvedores from '../../assets/banners/bannerDesenvolvedores.png'

import fotoBassani from '../../assets/fotos/bassani.jpg'
import fotoMilo from '../../assets/fotos/milo.jpeg'
import fotoJoao from '../../assets/fotos/joao.jpeg'
import fotoMatteo from '../../assets/fotos/matteo.jpeg'
import fotoValen from '../../assets/fotos/valen.jpeg'
import instagramIcon from '../../assets/icons/Instagram.svg'
import linkedinIcon from '../../assets/icons/LinkedIn.svg'
import xIcon from '../../assets/icons/X.svg'
import githubIcon from '../../assets/icons/GitHub.svg'
import { useTranslation } from 'react-i18next'

const Desenvolvedores = () => {
  const { t } = useTranslation();

  return (
    <>
      <Banner imagem={bannerDesenvolvedores} titulo={'Conheça-nos'} texto={'Todos os desenvolvedores responsaveis por esse projeto'}/>
      <section className='container pb-20'>
        <div className='flex flex-wrap max-w-[1200px] gap-32 mx-auto justify-center text-center '>
          <div className=' w-64 bg-vermelho flex flex-col items-center p-8 border-amarelo border-4'>
            <img src={fotoMilo} alt=""  className='size-40 rounded-full object-cover mb-4'/>
            <h1 className='text-amarelo text-2xl font-bold font-serif mb-4 '>Miguel Silveira</h1>
            <p className='text-white text-balance '>O menino mais lindo de toda a Etec Sebrae, dono do João Vitor Daniele Araujo e detentor do menor Q.I da Santa Cecília</p>
            <div className='flex gap-4 mt-4 *:size-10'>
              <a href="https://www.reddit.com/r/funny/comments/f0vkqk/i_photoshopped_a_gorilla_into_an_eggplant_for/?tl=pt-br"><img src={xIcon} alt="" /></a>
              <a href="https://www.instagram.com/bassanig/"><img src={instagramIcon} alt="" /></a>
              <a href="https://www.linkedin.com/in/guilherme-bassani-6b707226a/"><img src={linkedinIcon} alt="" /></a>
              <a href="https://github.com/bassanig"><img src={githubIcon} alt="" /></a>
            </div>
          </div>
          <div className=' w-64 bg-vermelho flex flex-col items-center p-8 border-amarelo border-4'>
            <img src={fotoBassani} alt=""  className='size-40 rounded-full object-cover mb-4'/>
            <h1 className='text-amarelo text-2xl font-bold font-serif mb-4 '>Guilherme Bassani</h1>
            <p className='text-white text-balance'>{t('devs-descricao.guilherme-bassani')}</p>
            <div className='flex gap-4 mt-4 *:size-10'>
              <a href="https://www.reddit.com/r/funny/comments/f0vkqk/i_photoshopped_a_gorilla_into_an_eggplant_for/?tl=pt-br"><img src={xIcon} alt="" /></a>
              <a href="https://www.instagram.com/bassanig/"><img src={instagramIcon} alt="" /></a>
              <a href="https://www.linkedin.com/in/guilherme-bassani-6b707226a/"><img src={linkedinIcon} alt="" /></a>
              <a href="https://github.com/bassanig"><img src={githubIcon} alt="" /></a>
            </div>
          </div>
            <div className=' w-64 bg-vermelho flex flex-col items-center p-8 border-amarelo border-4'>
            <img src={fotoJoao} alt=""  className='size-40 rounded-full object-cover mb-4'/>
            <h1 className='text-amarelo text-2xl font-bold font-serif mb-4 '>João Vitor</h1>
            <p className='text-white text-balance'>{t('devs-descricao.joao-vitor-araujo')}</p>
            <div className='flex gap-4 mt-4 *:size-10'>
              <a href="https://www.reddit.com/r/funny/comments/f0vkqk/i_photoshopped_a_gorilla_into_an_eggplant_for/?tl=pt-br"><img src={xIcon} alt="" /></a>
              <a href="https://www.instagram.com/bassanig/"><img src={instagramIcon} alt="" /></a>
              <a href="https://www.linkedin.com/in/guilherme-bassani-6b707226a/"><img src={linkedinIcon} alt="" /></a>
              <a href="https://github.com/bassanig"><img src={githubIcon} alt="" /></a>
            </div>
          </div>
          <div className=' w-64 bg-vermelho flex flex-col items-center p-8 border-amarelo border-4'>
            <img src={fotoMatteo} alt=""  className='size-40 rounded-full object-cover mb-4'/>
            <h1 className='text-amarelo text-2xl font-bold font-serif mb-4 '>Guilherme Bassani</h1>
            <p className='text-white text-balance'>{t('devs-descricao.matteo')}</p>
            <div className='flex gap-4 mt-4 *:size-10'>
              <a href="https://x.com/BoTIsMissing" target='_blanck'><img src={xIcon} alt="" /></a>
              <a href="https://instagram.com/mano.botkk/"><img src={instagramIcon} target='_blanck' /></a>
              <a href="https://www.linkedin.com/in/emmanuel-mateo-536911394/" target='_blanck'><img src={linkedinIcon} alt="" /></a>
              <a href="https://github.com/BoTIsMissing" target='_blanck'><img src={githubIcon} alt="" /></a>
            </div>
          </div>
          <div className=' w-64 bg-vermelho flex flex-col items-center p-8 border-amarelo border-4'>
            <img src={fotoValen} alt=""  className='size-40 rounded-full object-cover mb-4'/>
            <h1 className='text-amarelo text-2xl font-bold font-serif mb-4 '>Valentina Figueredo</h1>
            <p className='text-white text-balance'>{t('devs-descricao.valen')}</p>
            <div className='flex gap-4 mt-4 *:size-10'>
              <a href="https://x.com/valenrarr?s=21" target='_blanck'><img src={xIcon}/></a>
              <a href="https://www.instagram.com/valenrarr?igsh=MWRxcm8wM2pxd2Vvbw%3D%3D&utm_source=qr" target='_blanck'><img src={instagramIcon} alt="" /></a>
              <a href="https://www.linkedin.com/in/valentina-melo-figueredo-977775390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blanck'><img src={linkedinIcon} alt="" /></a>
              <a href="https://github.com/ValentinaMeloF" target='_blanck'><img src={githubIcon} alt="" /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Desenvolvedores