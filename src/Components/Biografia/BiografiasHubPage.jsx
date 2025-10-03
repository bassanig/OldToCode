import React from 'react';
import Titulo from '../Global/Titulo';
import CardHorizontal from './CardHorizontal';

import fotoGuttenberg from '../../assets/fotos/biografias/guttenberg.png';
import fotoWatt from '../../assets/fotos/biografias/watt.png';
import fotoKhwarizm from '../../assets/fotos/biografias/al-khwarizm.png';
import fotoMarie from '../../assets/fotos/biografias/marie.png';
import fotoTalles from '../../assets/fotos/biografias/talles.png'
import fotoArquimedes from '../../assets/fotos/biografias/arquimedes.png'
import fotoAristoteles from '../../assets/fotos/biografias/aristoteles.png'
import fotoEuclides from '../../assets/fotos/biografias/euclides.png'
import fotoBanner from '../../assets/banners/bannerConteudo.png'

import { useTranslation } from 'react-i18next';

import BannerConteudo  from '../../Components/Global/BannerConteudo'

const BiografiasHubPage = () => {
  const biografias = [
    {
      id: 'al-khwarizm',
      nome: 'Al-Khwarizmi',
      epoca: 'preHistoric',
      foto: fotoKhwarizm,
    },
    {
      id: 'arquimedes',
      nome: 'Arquimedes',
      epoca: 'preHistoric',
      foto: fotoArquimedes
    },
    {
      id: 'watt',
      nome: 'James Watt',
      epoca: 'preInitialMecanic',
      foto: fotoWatt,
    },
    {
      id: 'marie',
      nome: 'Marie Curie',
      epoca: 'initialMechanics',
      foto: fotoMarie,
    },
    {
      id: 'aristoteles',
      nome: 'Aristoteles',
      epoca: 'preHistoric',
      foto: fotoAristoteles
    },
    {
      id: 'euclides',
      nome: 'Euclides',
      epoca: 'preHistoric',
      foto: fotoEuclides
    },
    {
      id: 'guttenberg',
      nome: 'Johannes Gutenberg',
      epoca: 'initialMechanics',
      foto: fotoGuttenberg,
    },
    {
      id: 'talles',
      nome: 'Talles de Mileto',
      epoca: 'preHistoric',
      foto: fotoTalles,
    },
  ];

  const [ t ] = useTranslation();

  return (
    <section className='flex flex-col mb-20 min-h-screen'>
      <BannerConteudo titulo={t('home.biography.title')} imagem={fotoBanner}/>
      <div className='container' imagem={fotoKhwarizm}>
      
        <div className='py-6 px-4 w-full  grid grid-cols-2 gap-8'>
          {biografias.map((biografia) => (
            <CardHorizontal
              key={biografia.id}
              foto={biografia.foto}
              epoca={t(`periods.${biografia.epoca}`)}
              nome={biografia.nome}
              link={`/biografias/${biografia.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiografiasHubPage;
