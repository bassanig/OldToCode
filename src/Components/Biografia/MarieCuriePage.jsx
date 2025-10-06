import React from 'react'
import Banner from '../../Components/Global/Banner'
import bannerMarieCurie from '../../assets/banners/bannerMarieCurie.png'
import { useTranslation } from 'react-i18next'
import TituloTexto from '../Global/TipografiaPaginas/TituloTexto'
import Texto from '../Global/TipografiaPaginas/Texto'


const MarieCuriePage = () => {
  const { t } = useTranslation();
  return (
    <article className=''>
      <Banner imagem={bannerMarieCurie} titulo={'Marie Curie'} texto={'A pioneira da radioatividade e única pessoa a ganhar o Prêmio Nobel em duas ciências diferentes.'} />
      <main className='container mx-auto'>
        <TituloTexto texto={t('biography.marie.p1.title')} />
        <Texto texto={t('biography.marie.p1.text')}/>

        <TituloTexto texto={t('biography.marie.p2.title')}/>
        <Texto texto={t('biography.marie.p2.text')}/>
        <Texto texto={t('biography.marie.p2.text2')}/>
      </main>
    </article>
  )
}

export default MarieCuriePage

