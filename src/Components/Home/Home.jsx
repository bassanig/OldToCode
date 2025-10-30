import React from 'react'
import Banner from '../Global/Banner'
import Conhecanos from './Conhecanos'
import bannerInicio from '../../assets/banners/bannerInicio.png'
import { useTranslation } from 'react-i18next'
import Biografias from './biografias2/Biografias'
import Destaques from './destaques/Destaques'
import Fundamentos from './fundamentos/Fundamentos'
import Cronologia from './cronologia/Cronologia'
import ScrollAnimation from '../Global/ScrollAnimation'

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
    <div className='overflow-x-hidden'>
      <Banner imagem={bannerInicio} titulo={'OldToCode'} texto={t('home.banner.subtitle')} />
      <ScrollAnimation direction="up">
        <Conhecanos />
      </ScrollAnimation>
      <ScrollAnimation direction="left">
        <Destaques />
      </ScrollAnimation>
      <ScrollAnimation direction="right">
        <Biografias />
      </ScrollAnimation>
      <ScrollAnimation direction="left">
        <Fundamentos />
      </ScrollAnimation>
      <ScrollAnimation direction="right">
        <Cronologia />
      </ScrollAnimation>
      </div>
    </>
  )
}

export default Home