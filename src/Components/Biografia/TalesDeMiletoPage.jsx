import React from 'react'
import Banner from '../../Components/Global/Banner'
import bannerTales from '../../assets/banners/bannerTales.png'
import { useTranslation } from 'react-i18next'
import TituloTexto from '../Global/TipografiaPaginas/TituloTexto'
import Texto from '../Global/TipografiaPaginas/Texto'


const TalesDeMiletoPage = () => {
  const { t } = useTranslation();
  return (
    <article className=''>
      <Banner imagem={bannerTales} titulo={'Tales de Mileto'} texto={'O primeiro filósofo ocidental e um dos Sete Sábios da Grécia.'} />
      <main className='container mx-auto'>
        <TituloTexto texto={t('biography.tales.p1.title')} />
        <Texto texto={t('biography.tales.p1.text')}/>

        <TituloTexto texto={t('biography.tales.p2.title')}/>
        <Texto texto={t('biography.tales.p2.text')}/>
        <Texto texto={t('biography.tales.p2.text2')}/>
      </main>
    </article>
  )
}

export default TalesDeMiletoPage

