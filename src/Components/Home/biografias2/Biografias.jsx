import React from 'react'
import Card from './Card'
import Titulo from '../../Global/Titulo'

import fotoGuttenberg from '../../../assets/fotos/biografias/guttenberg.png'
import fotoWatt from '../../../assets/fotos/biografias/watt.png'
import fotoKhwarizm from '../../../assets/fotos/biografias/al-khwarizm.png'
import fotoMarie from '../../../assets/fotos/biografias/marie.png'
import { NavLink } from 'react-router-dom'


const Biografias = () => {
  return (
    <section className='container flex flex-col my-20 '>
      <Titulo titulo={'home.biography.title'}/>
      <div className='flex flex-col gap-8 w-full items-center'>
        <div className='py-6 px-4 max-sm:p-0 max-lg:px-0 grid grid-cols-4 gap-8 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full'
        >
          <Card foto={fotoKhwarizm} epoca={'periods.mediumMecanic'} nome={'Johannes Guttenberg'} />
          <Card foto={fotoWatt} epoca={'periods.mediumMecanic'} nome={'Johannes Guttenberg'} />
          <Card foto={fotoMarie} epoca={'periods.mediumMecanic'} nome={'Johannes Guttenberg'} />
          <div className='max-xl:hidden max-lg:block'>
            <Card foto={fotoGuttenberg} epoca={'periods.mediumMecanic'} nome={'Johannes Guttenberg'} /> 
          </div>
        </div>
        <NavLink to='biografias/al-khwarizm' className='text-xl rounded-xl hover:bg-amarelo-escuro px-6 py-2 bg-amarelo w-fit'>Veja mais</NavLink>
      </div>
    </section>
  )
}

export default Biografias