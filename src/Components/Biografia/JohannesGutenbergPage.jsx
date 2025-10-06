import React from 'react'
import Banner from '../../Components/Global/Banner'
import bannerGutenberg from '../../assets/banners/bannerGutenberg.png'
import { useTranslation } from 'react-i18next'
import TituloTexto from '../Global/TipografiaPaginas/TituloTexto'
import Texto from '../Global/TipografiaPaginas/Texto'


const JohannesGutenbergPage = () => {
  const { t } = useTranslation();
  return (
    <article className=''>
      <Banner imagem={bannerGutenberg} titulo={'Johannes Gutenberg'} texto={'O inventor da prensa móvel, revolucionando a disseminação do conhecimento.'} />
      <main className='container mx-auto'>
        <TituloTexto texto={t('biography.gutenberg.p1.title')} />
        <Texto texto={t('biography.gutenberg.p1.text')}/>

        <TituloTexto texto={t('biography.gutenberg.p2.title')}/>
        <Texto texto={t('biography.gutenberg.p2.text')}/>
        <Texto texto={t('biography.gutenberg.p2.text2')}/>
      </main>
    </article>
  )
}

export default JohannesGutenbergPage

