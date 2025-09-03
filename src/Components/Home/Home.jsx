import React from 'react'
import Banner from './Banner'
import Conhecanos from './Conhecanos'
import bannerInicio from '../../assets/banners/bannerInicio.png'

const Home = () => {
  return (
    <>
      <Banner imagem={bannerInicio} titulo={'OldToCode'} texto={'Onde a história da computação ganha vida desde o primeiro cálculo'} />
      <Conhecanos />
    </>
  )
}

export default Home