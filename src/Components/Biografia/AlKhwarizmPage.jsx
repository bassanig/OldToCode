import React, { use } from 'react'
import Banner from '../../Components/Global/Banner'
import bannerKhwarizm from '../../assets/banners/bannerKhwarizm.png'
import { useTranslation } from 'react-i18next'
import TituloTexto from '../Global/TipografiaPaginas/TituloTexto'
import Texto from '../Global/TipografiaPaginas/Texto'


const AlKhwarizmPage = () => {
  const { t } = useTranslation();
  return (
    <article className=''>
      <Banner imagem={bannerKhwarizm} titulo={'Al-Khwarizm'} texto={'O pai da Álgebra e precursor da Computação'} />
      <main className='container mx-auto'>
        <TituloTexto texto={t('biography.khwarizm.p1.title')} />
        <Texto texto={t('biography.khwarizm.p1.text')}/>

        <TituloTexto texto={t('biography.khwarizm.p2.title')}/>
        <Texto texto={t('biography.khwarizm.p2.text')}/>
        <Texto texto={t('biography.khwarizm.p2.text2')}/>
      </main>
    </article>
  )
}

export default AlKhwarizmPage