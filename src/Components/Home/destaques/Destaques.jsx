import React from 'react'
import Titulo from '../../Global/Titulo'
import fotoAristoteles from '../../../assets/fotos/aristoteles.png'
import fotAlgoritimos from '../../../assets/fotos/algoritimos.png'
import fotoPascalina from '../../../assets/fotos/pascalina.png'
import fotoCalculadora from '../../../assets/fotos/calculadora.png'
import fotoCircularArithmometer from '../../../assets/fotos/conteudos/arithmometerCircular.png'
import fotoCircularTear from '../../../assets/fotos/conteudos/tearCircular.png'
import fotoCircularBinario from '../../../assets/fotos/conteudos/binarioCircular.png'
import fotoCircularAstrolabio from '../../../assets/fotos/conteudos/astrolabioCircular.png'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import LinkCircular from './LinkCircular'


const Destaques = () => {
  const [ t ] = useTranslation();
  return (
    <section className='container xl:mt-12 px-4 '>
      <Titulo titulo='home.destaques.title'/>
      <div className='grid grid-cols-[2fr_1fr_1fr] max-lg:grid-cols-2 items-stretch gap-8 mt-10 mb-12 max-md:grid-cols-1 px-4 max-md:px-0'>
        <NavLink to='/conteudo/silogismo' className='max-h-130 w-full max-xl:max-h-100 max-xl:col-span-3
       rounded-2xl relative overflow-hidden group h-full max-lg:max-h-80'>
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-30'></div>
          <img src={fotoAristoteles} alt="" className='z-20 object-cover duration-300 h-full w-full max-sm:max-h-80 group-hover:scale-105 transition rounded-2xl object-center' />
          <div className='absolute bottom-0 z-40 p-6'>
              <span className=' text-amarelo-dark max-sm:text-sm  '>{t('home.logicFundamentals.title')}</span>
              <h1 className='text-gray-50 text-2xl max-sm:text-lg max-xl:text-xl'>{t('home.highlights.silogism.title')}</h1>
          </div>
        </NavLink>
        <NavLink to='/conteudo/algoritmos' className='max-2xl:max-h-120 max-xl:col-span-3 w-full max-xl:max-h-80 rounded-2xl max-sm:max-h-60 relative group overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-30'></div>
          <img src={fotAlgoritimos} alt="" className='object-cover duration-300 h-full max-sm:max-h-120 w-full group-hover:scale-105 transition'/>
          <div className='absolute bottom-0 z-40 p-6'>
              <span className=' text-amarelo-dark max-sm:text-sm  '>{t('home.logicFundamentals.title')}</span>
              <h1 className='text-gray-50 text-2xl max-sm:text-lg max-2xl:text-xl'>{t('home.highlights.algorithms.title')}</h1>
          </div>
        </NavLink>
        <div className='grid grid-cols-1  gap-8 max-2xl:max-h-120 max-xl:grid-cols-2 max-xl:col-span-3 max-lg:grid-cols-1'>
          <NavLink to='/conteudo/calculadoras' className=' rounded-2xl relative group overflow-hidden max-xl:max-h-50'>
            <div className='absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-30'></div>
            <img src={fotoCalculadora} alt="" className='w-full h-full object-cover group-hover:scale-105 transition duration-300' />
            <div className='absolute bottom-0 z-40 p-6'>
              <span className=' text-amarelo-dark max-sm:text-sm '>{t('periods.mediumMecanic')}</span>
              <h1 className='text-gray-50 text-2xl max-sm:text-lg max-2xl:text-xl'>{t('home.highlights.calculator.title')}</h1>
          </div>
          </NavLink>
          <NavLink to='/conteudo/pascalina' className='h-full w-full rounded-2xl relative group overflow-hidden max-xl:max-h-50'>
            <div className='absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-30'></div>
            <img src={fotoPascalina} alt="" className='duration-300 w-full h-full object-cover group-hover:scale-105 transition' />
            <div className='absolute bottom-0 z-40 p-6'>
              <span className=' text-amarelo-dark max-sm:text-sm'>{t('periods.mediumMecanic')}</span>
              <h1 className='text-gray-50 text-2xl max-sm:text-lg max-2xl:text-xl'>{t('home.highlights.pascalina.title')}</h1>
            </div>
          </NavLink>
        </div>
      </div>
      <div className='px-4 grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 justify-between  items-center gap-8 mt-10 w-full'>
        <NavLink to='/conteudo/arithmometer'>
          <LinkCircular imagem={fotoCircularArithmometer} titulo={t('home.highlights.arithmometer.title')} topico={t('home.highlights.arithmometer.topic')} periodo={t('home.highlights.arithmometer.period')}/>
        </NavLink>
        <NavLink to='/conteudo/tear'>
          <LinkCircular imagem={fotoCircularTear} titulo={t('home.highlights.tear.title')} topico={t('home.highlights.tear.topic')} periodo={t('home.highlights.tear.period')}/>
        </NavLink>
        <NavLink to='/conteudo/binario'>
          <LinkCircular imagem={fotoCircularBinario} titulo={t('home.highlights.binario.title')} topico={t('home.highlights.binario.topic')} periodo={t('home.highlights.binario.period')}/>
        </NavLink>
        <NavLink to='/conteudo/astrolabio'>
          <LinkCircular imagem={fotoCircularAstrolabio} titulo={t('home.highlights.astrolabio.title')} topico={t('home.highlights.astrolabio.topic')} periodo={t('home.highlights.astrolabio.period')}/>
        </NavLink>
      </div>
    </section>
  )
}

export default Destaques