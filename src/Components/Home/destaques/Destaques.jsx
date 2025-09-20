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
    <section className='container mt-24'>
      <Titulo titulo='home.destaques.title'/>
      <div className='flex items-stretch gap-8 mt-10 mb-12'>
        <NavLink to='/conteudo/silogismo' className='rounded-2xl relative overflow-hidden group'>
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-30'></div>
          <img src={fotoAristoteles} alt="" className='z-20 object-cover w-full group-hover:scale-105 transition rounded-2xl' />
          <div className='absolute bottom-0 z-40 p-6'>
              <span className=' text-gray-50 '>{t('logicFundamentals.title')}</span>
              <h1 className='text-gray-50 text-2xl'>{t('home.highlights.silogism.title')}</h1>
          </div>
        </NavLink>
        <NavLink to='/conteudo/algoritmos' className='rounded-2xl relative group overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-30'></div>
          <img src={fotAlgoritimos} alt="" className='object-cover h-full w-full group-hover:scale-105 transition'/>
          <div className='absolute bottom-0 z-40 p-6'>
              <span className=' text-gray-50 '>{t('logicFundamentals.title')}</span>
              <h1 className='text-gray-50 text-2xl'>{t('home.highlights.algorithms.title')}</h1>
          </div>
        </NavLink>
        <div className='flex flex-col justify-between gap-8'>
          <NavLink to='/conteudo/calculadoras' className=' rounded-2xl flex-1 relative group overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-30'></div>
            <img src={fotoCalculadora} alt="" className='w-full h-full object-cover group-hover:scale-105 transition' />
            <div className='absolute bottom-0 z-40 p-6'>
              <span className=' text-gray-50 '>{t('periods.mediumMecanic')}</span>
              <h1 className='text-gray-50 text-2xl'>{t('home.highlights.calculator.title')}</h1>
          </div>
          </NavLink>
          <NavLink to='/conteudo/pascalina' className='flex-1 rounded-2xl relative group overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-30'></div>
            <img src={fotoPascalina} alt="" className='w-full h-full object-cover group-hover:scale-105 transition' />
            <div className='absolute bottom-0 z-40 p-6'>
              <span className=' text-gray-50 '>{t('periods.mediumMecanic')}</span>
              <h1 className='text-gray-50 text-2xl'>{t('home.highlights.pascalina.title')}</h1>
            </div>
          </NavLink>
        </div>
      </div>
      <div className='flex'>
        <LinkCircular imagem={fotoCircularKhawarizm} titulo={'Al-Khwarizm: A criação do algoritmo'} topico={'Biografias'}/>
        <LinkCircular imagem={fotoCircularKhawarizm} titulo={'Al-Khwarizm: A criação do algoritmo'} topico={'Biografias'}/>
        <LinkCircular imagem={fotoCircularKhawarizm} titulo={'Al-Khwarizm: A criação do algoritmo'} topico={'Biografias'}/>
      </div>
    </section>
  )
}

export default Destaques