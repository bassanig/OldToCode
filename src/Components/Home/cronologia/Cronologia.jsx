import React from 'react'
import Titulo from '../../Global/Titulo'

import fotoPreHistoria from '../../../assets/fotos/cronologia/pre-historia.png'
import fotoPreMecanicaInicial from '../../../assets/fotos/cronologia/pre-mecanica-inicial.png'
import fotoMecanicaInicial from '../../../assets/fotos/cronologia/mecanica-inicial.png'
import fotoMecanicaIntermediaria from '../../../assets/fotos/cronologia/mecanica-intermediaria.png'


import { useTranslation } from 'react-i18next'
import CronologiaCard from './CronologiaCard'


const Cronologia = () => {
  const [ t ] = useTranslation();
  return (
    <section className='container mb-16'>
        <Titulo titulo={'home.chronology.title'}/>
        <div className='grid max-xl:grid-cols-2 gap-8 px-4 mt-16 max-sm:mt-0 max-lg:grid-cols-1 max-md:px-2 '>
          <CronologiaCard to="/conteudo/cronologia-pre-historia" foto={fotoPreHistoria} titulo={t('home.chronology.preHistoric.title')} subtitulo={t('home.chronology.preHistoric.subtitle')}/>
          <CronologiaCard to="/conteudo/cronologia-pre-mecanica-inicial" foto={fotoPreMecanicaInicial} titulo={t('home.chronology.preInitialMechanic.title')} subtitulo={t('home.chronology.preInitialMechanic.subtitle')}/>
          <CronologiaCard to="/conteudo/cronologia-mecanica-inicial" foto={fotoMecanicaInicial} titulo={t('home.chronology.initialMechanic.title')} subtitulo={t('home.chronology.initialMechanic.subtitle')}/>
          <CronologiaCard to="/conteudo/cronologia-mecanica-intermediaria" foto={fotoMecanicaIntermediaria} titulo={t('home.chronology.mediumMechanic.title')} subtitulo={t('home.chronology.mediumMechanic.subtitle')} isGuttenberg={true}/>
        </div>
    </section>
  )
}

export default Cronologia