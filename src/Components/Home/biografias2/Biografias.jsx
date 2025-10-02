import React from 'react';
import Card from './Card';
import Titulo from '../../Global/Titulo';
import { NavLink } from 'react-router-dom';
import biografiasData from '../../../data/biografias.json';
import alKhwarizmiFoto from '../../../assets/fotos/biografias/al-khwarizm.png';
import wattFoto from '../../../assets/fotos/biografias/watt.png';
import marieFoto from '../../../assets/fotos/biografias/marie.png';
import guttenbergFoto from '../../../assets/fotos/biografias/guttenberg.png';

const Biografias = () => {
  const displayedBiographies = [
    { key: 'al-khwarizmi', foto: alKhwarizmiFoto },
    { key: 'james-watt', foto: wattFoto },
    { key: 'joseph-marie-jacquard', foto: marieFoto },
    { key: 'johannes-gutenberg', foto: guttenbergFoto },
  ];

  return (
    <section className='container flex flex-col my-20 '>
      <Titulo titulo={'home.biography.title'}/>
      <div className='flex flex-col gap-8 w-full items-center'>
        <div className='py-6 px-4 max-sm:p-0 max-lg:px-0 grid grid-cols-4 gap-8 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full'>
          {displayedBiographies.map((bio, index) => {
            const data = biografiasData[bio.key].pt;
            return (
              <Card 
                key={index} 
                foto={bio.foto} 
                epoca={'periods.mediumMecanic'} 
                nome={data.nome} 
                link={`/biografia/${bio.key}`}
              />
            );
          })}
        </div>
        <NavLink to='/biografias' className='text-xl rounded-xl hover:bg-amarelo-escuro px-6 py-2 bg-amarelo w-fit'>Veja mais</NavLink>
      </div>
    </section>
  )
}

export default Biografias;

