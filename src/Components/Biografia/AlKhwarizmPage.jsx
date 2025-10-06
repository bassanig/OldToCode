import React from 'react'
import Banner from '../../Components/Global/Banner'
import bannerKhwarizm from '../../assets/banners/bannerKhwarizm.png'
import { useTranslation } from 'react-i18next'
import TituloTexto from '../Global/TipografiaPaginas/TituloTexto'
import Texto from '../Global/TipografiaPaginas/Texto'


const AlKhwarizmiPage = () => {
  const { t } = useTranslation();
  
  const bio = t('biography.khwarizm', { returnObjects: true });
  const pageTitle = bio.title || 'Al-Khwarizmi'; 
  const bannerText = bio.banner_text || 'O pai da Álgebra e dos Algoritmos.'; 

  return (
    <article className=''>
      <Banner 
        imagem={bannerKhwarizm} 
        titulo={pageTitle} 
        texto={bannerText} 
      />
      
      <main className='container mx-auto text-black pb-15'> 
        
        <TituloTexto texto={t('biography.khwarizm.p1.title')} />
        <Texto className="pb-4" texto={t('biography.khwarizm.p1.text')}/>
        {t('biography.khwarizm.p1.text2') && <Texto className="pb-4" texto={t('biography.khwarizm.p1.text2')}/>}

        <TituloTexto texto={t('biography.khwarizm.p2.title')}/>
        <Texto className="pb-4" texto={t('biography.khwarizm.p2.text')}/>
        {t('biography.khwarizm.p2.text2') && <Texto className="pb-4" texto={t('biography.khwarizm.p2.text2')}/>}
        
        <TituloTexto texto={t('biography.khwarizm.p3.title')}/>
        <Texto className="pb-4" texto={t('biography.khwarizm.p3.text')}/>
        {t('biography.khwarizm.p3.text2') && <Texto className="pb-4" texto={t('biography.khwarizm.p3.text2')}/>}
      </main>
    </article>
  )
}

export default AlKhwarizmiPage