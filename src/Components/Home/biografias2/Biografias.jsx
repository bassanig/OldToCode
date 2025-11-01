import React from 'react'
import Card from './Card'
import Titulo from '../../Global/Titulo'

import fotoTales from '../../../assets/fotos/biografias/talles.png'
import fotoGuttenberg from '../../../assets/fotos/biografias/guttenberg.png'
import fotoKhwarizm from '../../../assets/fotos/biografias/al-khwarizm.png'
import fotoMarie from '../../../assets/fotos/biografias/marie.png'
import { NavLink } from 'react-router-dom'
import { t } from 'i18next'


const Biografias = () => {
  const biografias = [
    {
      id: 'al-khwarizmi',
      nome: 'Al-Khwarizmi',
      epoca: 'preHistoric',
      foto: fotoKhwarizm,
    },
    {
      id: 'johannes-gutenberg',
      nome: 'Johannes Gutenberg',
      epoca: 'initialMechanics',
      foto: fotoGuttenberg,
    },
    {
      id: 'joseph-marie-jacquard',
      nome: 'Joseph Marie Jacquard',
      epoca: 'initialMechanics',
      foto: fotoMarie,
    },
    {
      id: 'tales-de-mileto',
      nome: 'Tales de Mileto',
      epoca: 'preHistoric',
      foto: fotoTales,
    },
  ];

  return (
    <section className='container flex flex-col my-20 overflow-x-hidden'>
      <Titulo titulo={'home.biography.title'}/>
      <div className='flex flex-col gap-8 w-full items-center'>
        <div className='py-6 px-4 max-sm:p-0 max-lg:px-0 grid grid-cols-4 gap-8 max-xl:grid-cols-2 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full max-sm:px-2'
        >
          {biografias.map((biografia, index) => (
              <Card
                foto={biografia.foto}
                epoca={biografia.epoca}
                nome={t(`biographys-names.${biografia.id}`)}
                link={`/conteudo/${biografia.id}`}
                index={index}
              />
          ))}
        </div> 
        <NavLink to='/biografias' className='text-xl rounded-xl hover:bg-amarelo-escuro px-6 py-2 bg-amarelo w-fit'>{t('home.biography.seeMore')}</NavLink>
      </div>
    </section>
  )
}

export default Biografias