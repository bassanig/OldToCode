import React from 'react'
import Banner from '../../Components/Global/Banner'

import bannerGutenberg from '../../assets/banners/bannerGutenberg.png' 
import { useTranslation } from 'react-i18next'
import TituloTexto from '../Global/TipografiaPaginas/TituloTexto'
import Texto from '../Global/TipografiaPaginas/Texto'


const JohannesGutenbergPage = () => {
  const { t } = useTranslation();
  
  
  const bio = t('biography.gutenberg', { returnObjects: true });
  
  const pageTitle = bio.title || 'Johannes Gutenberg'; 
  const bannerText = bio.banner_text || 'O inventor da prensa móvel.'; 

  return (
    <article className=''>
      <Banner 
        imagem={bannerGutenberg} 
        titulo={pageTitle} 
        texto={bannerText} 
      />
      

      <main className='container mx-auto text-black pb-15'> 
        

        <TituloTexto texto={t('biography.gutenberg.p1.title')} />
        <Texto texto={t('biography.gutenberg.p1.text')}/>
        {t('biography.gutenberg.p1.text2') && <Texto texto={t('biography.gutenberg.p1.text2')}/>}


        <TituloTexto texto={t('biography.gutenberg.p2.title')}/>
        <Texto texto={t('biography.gutenberg.p2.text')}/>
        {t('biography.gutenberg.p2.text2') && <Texto texto={t('biography.gutenberg.p2.text2')}/>}

        
      </main>
    </article>
  )
}

export default JohannesGutenbergPage

