import React from 'react'
import Titulo from '../../Global/Titulo'
import fotoAristoteles from '../../../assets/fotos/aristoteles.png'
import fotAlgoritimos from '../../../assets/fotos/algoritimos.png'
import fotoPascalina from '../../../assets/fotos/pascalina.png'
import fotoCalculadora from '../../../assets/fotos/calculadora.png'
import fotoCircularKhawarizm from '../../../assets/fotos/biografias/circularKhwarizm.png'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import LinkCircular from './LinkCircular'


const Destaques = () => {
  const [ t ] = useTranslation();
  return (
    <section className='container xl:mt-12 max-sm:px-4'>
      <Titulo titulo='home.destaques.title'/>
      <div className='flex flex-col lg:flex-row items-center lg:justify-center gap-8 mt-10 mb-12'>
        <NavLink to='/conteudo/silogismo' className='max-h-130 max-2xl:col-span-2
        max-md:col-auto rounded-2xl relative overflow-hidden group'>
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-30'></div>
          <img src={fotoAristoteles} alt="" className='z-20 object-cover h-full w-full max-sm:max-h-80 group-hover:scale-105 transition rounded-2xl object-center' />
          <div className='absolute bottom-0 z-40 p-6'>
              <span className=' text-gray-50 max-sm:text-sm '>{t('logicFundamentals.title')}</span>
              <h1 className='text-gray-50 text-2xl max-sm:text-xl'>{t('home.highlights.silogism.title')}</h1>
          </div>
        </NavLink>
        <NavLink to='/conteudo/algoritmos' className='max-2xl:max-h-120 rounded-2xl relative group overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-30'></div>
          <img src={fotAlgoritimos} alt="" className='object-cover h-full max-sm:max-h-120 w-full group-hover:scale-105 transition'/>
          <div className='absolute bottom-0 z-40 p-6'>
              <span className=' text-gray-50 max-sm:text-sm  '>{t('logicFundamentals.title')}</span>
              <h1 className='text-gray-50 text-2xl max-sm:text-xl'>{t('home.highlights.algorithms.title')}</h1>
          </div>
        </NavLink>
        <div className='flex flex-col justify-between gap-8 max-2xl:max-h-120'>
          <NavLink to='/conteudo/calculadoras' className=' rounded-2xl flex-1 relative group overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-30'></div>
            <img src={fotoCalculadora} alt="" className='w-full h-full object-cover group-hover:scale-105 transition' />
            <div className='absolute bottom-0 z-40 p-6'>
              <span className=' text-gray-50 max-sm:text-sm '>{t('periods.mediumMecanic')}</span>
              <h1 className='text-gray-50 text-2xl max-sm:text-xl'>{t('home.highlights.calculator.title')}</h1>
          </div>
          </NavLink>
          <NavLink to='/conteudo/pascalina' className='flex-1 rounded-2xl relative group overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-30'></div>
            <img src={fotoPascalina} alt="" className='w-full h-full object-cover group-hover:scale-105 transition' />
            <div className='absolute bottom-0 z-40 p-6'>
              <span className=' text-gray-50 max-sm:text-sm '>{t('periods.mediumMecanic')}</span>
              <h1 className='text-gray-50 text-2xl max-sm:text-xl'>{t('home.highlights.pascalina.title')}</h1>
            </div>
          </NavLink>
        </div>
      </div>
      <div className='grid grid-cols-4 max-md:flex max-md:flex-col max-2xl:grid-cols-2 lg:flex-row gap-8 mt-10 items-center  w-full'>
        <LinkCircular imagem={fotoCircularKhawarizm} titulo={'Al-Khwarizm: A criação do algoritmo'} topico={'Biografias'} periodo={'Pré-história'}/>
        <LinkCircular imagem={fotoCircularKhawarizm} titulo={'Al-Khwarizm: A criação do algoritmo'} topico={'Biografias'} periodo={'Pré-história'}/>
        <LinkCircular imagem={fotoCircularKhawarizm} titulo={'Al-Khwarizm: A criação do algoritmo'} topico={'Biografias'} periodo={'Pré-história'}/>
        <LinkCircular imagem={fotoCircularKhawarizm} titulo={'Al-Khwarizm: A criação do algoritmo'} topico={'Biografias'} periodo={'Pré-história'}/>
      </div>
    </section>
  )
}

export default Destaques