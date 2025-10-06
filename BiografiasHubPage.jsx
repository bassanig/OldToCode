import React from 'react';
import Titulo from '../Global/Titulo';
import CardHorizontal from './CardHorizontal';
import Card from '../Home/biografias2/Card';

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
      nome: 'Joseph Marie Jacquard',
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
      id: 'tales',
      nome: 'Talles de Mileto',
      epoca: 'preHistoric',
      foto: fotoTalles,
    },
  ];

  const [ t ] = useTranslation();

  return (
    <section className='flex flex-col mb-20 min-h-screen'>
      <BannerConteudo titulo={t('home.biography.title')} imagem={fotoBanner}/>
      <div className='container px-6'>
        <div className=' max-md:grid-cols-1 '>

          <div className=' grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8 w-full'>
            {biografias.map((biografia) => (
              <Card
                key={biografia.id}
                foto={biografia.foto}
                epoca={t(`periods.${biografia.epoca}`)}
                nome={biografia.nome}
                link={`/biografias/${biografia.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiografiasHubPage;
