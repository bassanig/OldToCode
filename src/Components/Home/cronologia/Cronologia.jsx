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
        <div className='grid max-lg:grid-cols-2 gap-8 px-4 mt-16'>
          <CronologiaCard foto={fotoPreHistoria} titulo={t('home.chronology.preHistoric.title')} subtitulo={'home.chronology.preHistoric.subtitle'}/>
          <CronologiaCard foto={fotoPreMecanicaInicial} titulo={t('home.chronology.preInitialMechanic.title')} subtitulo={'home.chronology.preInitialMechanic.subtitle'}/>
          <CronologiaCard foto={fotoMecanicaInicial} titulo={t('home.chronology.initialMechanic.title')} subtitulo={'home.chronology.initialMechanic.subtitle'}/>
          <CronologiaCard foto={fotoMecanicaIntermediaria} titulo={t('home.chronology.mediumMechanic.title')} subtitulo={'home.chronology.mediumMechanic.subtitle'}/>
        </div>
    </section>
  )
}

export default Cronologia