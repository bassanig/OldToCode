import React from 'react'
import Card from './Card'
import Titulo from '../../Global/Titulo'

import fotoGuttenberg from '../../../assets/fotos/biografias/guttenberg.png'
import { NavLink } from 'react-router-dom'


const Biografias = () => {
  return (
    <section className='container flex flex-col my-20'>
      <Titulo titulo={'home.biography.title'}/>
      <div className='flex flex-col gap-8 w-full items-center'>
        <div className='py-8 flex w-full justify-around flex-wrap '>
          <Card foto={fotoGuttenberg} epoca={'periods.mediumMecanic'} nome={'Johannes Guttenberg'} />
          <Card foto={fotoGuttenberg} epoca={'periods.mediumMecanic'} nome={'Johannes Guttenberg'} />
          <Card foto={fotoGuttenberg} epoca={'periods.mediumMecanic'} nome={'Johannes Guttenberg'} />
          <Card foto={fotoGuttenberg} epoca={'periods.mediumMecanic'} nome={'Johannes Guttenberg'} /> 
        </div>
        <NavLink to='biografias/al-khwarizm' className='text-2xl px-4 py-2 bg-amarelo w-fit'>Veja mais</NavLink>
      </div>
    </section>
  )
}

export default Biografias