import React from 'react'
import Card from './Card'
import Titulo from '../../Global/Titulo'

import fotoTales from '../../../assets/fotos/biografias/talles.png'
import fotoGuttenberg from '../../../assets/fotos/biografias/guttenberg.png'
import fotoKhwarizm from '../../../assets/fotos/biografias/al-khwarizm.png'
import fotoMarie from '../../../assets/fotos/biografias/marie.png'
import { NavLink } from 'react-router-dom'


const Biografias = () => {
  const biografias = [
    {
      id: 'al-khwarizm',
      nome: 'Al-Khwarizmi',
      epoca: 'preHistoric',
      foto: fotoKhwarizm,
    },
    {
      id: 'gutenberg',
      nome: 'Johannes Gutenberg',
      epoca: 'preInitialMechanics',
      foto: fotoGuttenberg,
    },
    {
      id: 'marie',
      nome: 'Joseph Marie Jacquard',
      epoca: 'initialMechanics',
      foto: fotoMarie,
    },
    {
      id: 'tales',
      nome: 'Tales de Mileto',
      epoca: 'preHistoric',
      foto: fotoTales,
    },
  ];

  return (
    <section className='container flex flex-col my-20 '>
      <Titulo titulo={'home.biography.title'}/>
      <div className='flex flex-col gap-8 w-full items-center'>
        <div className='py-6 px-4 max-sm:p-0 max-lg:px-0 grid grid-cols-4 gap-8 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full'
        >
          <Card foto={biografias[0].foto} epoca={biografias[0].epoca} nome={biografias[0].nome} link={`/biografias/${biografias[0].id}`} />
          <Card foto={biografias[1].foto} epoca={biografias[1].epoca} nome={biografias[1].nome} link={`/biografias/${biografias[1].id}`} />
          <Card foto={biografias[2].foto} epoca={biografias[2].epoca} nome={biografias[2].nome} link={`/biografias/${biografias[2].id}`} />
          <div className='max-xl:hidden max-lg:block'>
            <Card foto={biografias[3].foto} epoca={biografias[3].epoca} nome={biografias[3].nome} link={`/biografias/${biografias[3].id}`} />
          </div>
        </div>
        <NavLink to='/biografias' className='text-xl rounded-xl hover:bg-amarelo-escuro px-6 py-2 bg-amarelo w-fit'>Veja mais</NavLink>
      </div>
    </section>
  )
}

export default Biografias