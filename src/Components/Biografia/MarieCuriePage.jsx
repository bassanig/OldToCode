import React from 'react'
import Banner from '../../Components/Global/Banner'
// MUDANÇA: Importando o novo banner para Joseph Marie
import bannerJosephMarie from '../../assets/banners/bannerMarieCurie.png' 
import { useTranslation } from 'react-i18next'
import TituloTexto from '../Global/TipografiaPaginas/TituloTexto'
import Texto from '../Global/TipografiaPaginas/Texto'


const JosephMariePage = () => {
  const { t } = useTranslation();
  
 
  const bio = t('biography.jacquard', { returnObjects: true });
  
  
  const pageTitle = bio.title || 'Joseph Marie Jacquard'; 
  const bannerText = bio.banner_text || 'O inventor do tear programável e precursor da computação.'; 

  return (
    <article className=''>
      <Banner 
        // Usando o banner e as informações do JSON
        imagem={bannerJosephMarie} 
        titulo={pageTitle} 
        texto={bannerText} 
      />
      
      <main className='container mx-auto pb-15'>
        {/* Usando as chaves de tradução do Jacquard */}
        <TituloTexto texto={t('biography.jacquard.p1.title')} />
        <Texto texto={t('biography.jacquard.p1.text')}/>
        {/* Presumindo que p1 também pode ter text2, se existir */}
        <Texto texto={t('biography.jacquard.p1.text2')}/> 

        <TituloTexto texto={t('biography.jacquard.p2.title')}/>
        <Texto texto={t('biography.jacquard.p2.text')}/>
        <Texto texto={t('biography.jacquard.p2.text2')}/>
      </main>
    </article>
  )
}

export default JosephMariePage
