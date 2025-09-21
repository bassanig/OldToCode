import React from 'react'
import Banner from '../Global/Banner'
import Conhecanos from './Conhecanos'
import bannerInicio from '../../assets/banners/bannerInicio.png'
import { useTranslation } from 'react-i18next'
import Biografias from './biografias2/Biografias'
import Footer from '../Global/Footer'
import Destaques from './destaques/Destaques'

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Banner imagem={bannerInicio} titulo={'OldToCode'} texto={t('home.banner.subtitle')} />
      <Conhecanos />
      <Destaques />
      <Biografias />
      <Footer />
    </>
  )
}

export default Home