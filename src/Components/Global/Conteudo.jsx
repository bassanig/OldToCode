import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import fotoBannerConteudo from '../../assets/banners/bannerConteudo.png'
import BannerConteudo from './BannerConteudo'
import Titulo from './Titulo'
import Texto from './TipografiaPaginas/Texto'
import TituloTexto from './TipografiaPaginas/TituloTexto'
import SideMenu from './SideMenu'
import conteudos from '../../data/conteudos.json'

import fotoAristoteles from '../../assets/fotos/aristoteles.png'
import fotAlgoritimos from '../../assets/fotos/algoritimos.png'
import fotoCalculadora from '../../assets/fotos/calculadora.png'
import fotoPascalina from '../../assets/fotos/pascalina.png'
import fotoTeste from '../../assets/fotos/teste.png'

const images = {
  'aristoteles.png': fotoAristoteles,
  'algoritimos.png': fotAlgoritimos,
  'calculadora.png': fotoCalculadora,
  'pascalina.png': fotoPascalina,
  'teste.png': fotoTeste
}

const Conteudo = () => {
  const { id } = useParams()
  const { i18n, t } = useTranslation()
  const lang = i18n.language

  const [sections, setSections] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  const conteudoData = conteudos[id]
  const conteudo = conteudoData ? (conteudoData[lang] || conteudoData['en']) : null

  useEffect(() => {
    sectionRefs.current = {};
    if (conteudo) {
      const newSections = [];
      newSections.push({ id: 'main-title', title: t(conteudo.titulo), type: 'title' });
      conteudo.content.forEach((item, index) => {
        if (item.type === 'subtitle') {
          newSections.push({
            id: `subtitle-${index}`,
            title: item.text,
            type: item.type
          });
        }
      });
      setSections(newSections);
    }
  }, [conteudo, t]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.5 }
    );

    const currentRefs = sectionRefs.current;
    Object.values(currentRefs).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(currentRefs).forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [sections]);

  if (!conteudo) {
    return (
      <div className="container py-10">
        <Titulo titulo="conteudo.naoEncontrado" />
      </div>
    )
  }

  const renderContent = (item, index) => {
    switch (item.type) {
      case 'subtitle':
        //eslint-disable-next-line
        const sectionId = `subtitle-${index}`;
        return <div id={sectionId} ref={(el) => sectionRefs.current[sectionId] = el}><TituloTexto key={index} texto={item.text} /></div>
      case 'paragraph':
        return <Texto key={index} texto={item.text}/>
      case 'list':
        return (
          <ul key={index} className="list-disc text-lg lg:text-2xl mb-12 list-inside text-gray-800 dark:text-gray-200">
            {item.items.map((li, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: li }}></li>
            ))}
          </ul>
        )
      case 'image':
        return (
          <figure key={index} className="my-12">
            <img src={images[item.src]} alt={item.alt} className="w-full max-h-150 rounded-lg object-contain" />
            {item.caption && <figcaption className="text-center text-sm mt-2 text-gray-600 dark:text-gray-400">{item.caption}</figcaption>}
          </figure>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-4 md:py-10 pb-12 md:pb-25">
      <BannerConteudo imagem={fotoBannerConteudo} titulo='Fundamentos' />
      <div className='container flex flex-col lg:flex-row gap-12'>
        <div className="w-full lg:w-3/4">
          <div id="main-title" ref={(el) => sectionRefs.current['main-title'] = el}>
            <Titulo titulo={conteudo.titulo} />
          </div>
          <div className="mt-8 space-y-4">
            {conteudo.content.map(renderContent)}
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/4 sticky top-10 h-fit max-h-screen ">
          <SideMenu sections={sections} activeSection={activeSection} />
        </div>
      </div>
    </section>
  )
}

export default Conteudo
