import React from "react";
import Banner from "../../Components/Global/Banner";
import bannerJamesWatt from "../../assets/banners/bannerJamesWatt.png"; // **GARANTIR QUE ESTA IMAGEM EXISTA**
import { useTranslation } from "react-i18next";
import TituloTexto from "../Global/TipografiaPaginas/TituloTexto";
import Texto from "../Global/TipografiaPaginas/Texto";

const JamesWattPage = () => {
  const { t } = useTranslation();

  
  const bio = t('biography.james_watt', { returnObjects: true });


  const pageTitle = bio.title || "James Watt";
  const bannerText = bio.banner_text || t('outros.biografia_indisponivel'); 

  return (
    <article className=''>
      <Banner 
        imagem={bannerJamesWatt} 
        titulo={pageTitle} 
        texto={bannerText} 
      />
      <main className='container mx-auto'>
        
    
        <TituloTexto texto={t('biography.james_watt.p1.title')} />
        <Texto texto={t('biography.james_watt.p1.text')}/>

       
        <TituloTexto texto={t('biography.james_watt.p2.title')}/>
        <Texto texto={t('biography.james_watt.p2.text')}/>

        
        <TituloTexto texto={t('biography.james_watt.p3.title')}/>
        <Texto texto={t('biography.james_watt.p3.text')}/>

        
        <TituloTexto texto={t('biography.james_watt.p4.title')}/>
        <Texto texto={t('biography.james_watt.p4.text')}/>
        
      </main>
    </article>
  )
}

export default JamesWattPage;