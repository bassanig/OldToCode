import React from 'react';
import Card from '../Home/biografias2/Card';
import Titulo from '../Global/Titulo';

import fotoGuttenberg from '../../assets/fotos/biografias/guttenberg.png';
import fotoWatt from '../../assets/fotos/biografias/watt.png';
import fotoKhwarizm from '../../assets/fotos/biografias/al-khwarizm.png';
import fotoMarie from '../../assets/fotos/biografias/marie.png';

const BiografiasPage = () => {
  const biografias = [
    {
      id: 'al-khwarizm',
      nome: 'Al-Khwarizmi',
      epoca: 'periods.goldenAge',
      foto: fotoKhwarizm,
    },
    {
      id: 'watt',
      nome: 'James Watt',
      epoca: 'periods.industrialRevolution',
      foto: fotoWatt,
    },
    {
      id: 'marie',
      nome: 'Joseph Marie Jacquard',
      epoca: 'periods.modernAge',
      foto: fotoMarie,
    },
    {
      id: 'guttenberg',
      nome: 'Johannes Gutenberg',
      epoca: 'periods.renaissance',
      foto: fotoGuttenberg,
    },
    {
      id: 'tales',
      nome: 'Tales de Mileto',
      epoca: 'periods.goldenAge',
      foto: fotoKhwarizm,
    }
  ];
  return (
    <section className='container flex flex-col my-20 min-h-screen'>
      <Titulo titulo={'home.biography.title'} />
      <div className='py-6 px-4 max-sm:p-0 max-lg:px-0 grid grid-cols-4 gap-8 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:w-full'>
        {biografias.map((biografia) => (
          <Card
            key={biografia.id}
            foto={biografia.foto}
            epoca={biografia.epoca}
            nome={biografia.nome}
            link={`/conteudo/${biografia.id}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BiografiasPage;