import React from 'react'
import Titulo from '../../Global/Titulo'
import FundamentosCard from './FundamentosCard'

import fotoLogica from '../../../assets/fotos/fundamentos/logica.png'
import fotoDados from '../../../assets/fotos/fundamentos/dados.png'
import fotoAlgoritimos2 from '../../../assets/fotos/fundamentos/algoritmos2.png'


const Fundamentos = () => {
  return (
    <section className='container mb-25'>
      <Titulo titulo='home.logicFundamentals.title' />
      <div className='flex max-xl:flex-col justify-between gap-8 mb-16 mt-16 px-4'>
        <FundamentosCard img={fotoLogica} index={1} titulo={'home.logicFundamentals.logic.title'} level={'levels.beginner'}/>
        <FundamentosCard img={fotoDados} titulo={'home.logicFundamentals.data.title'} index={2} level={'levels.intermediate'}/>
        <FundamentosCard img={fotoAlgoritimos2} titulo={'home.logicFundamentals.algorithms.title'} index={3} level={'levels.advanced'}/>
      </div>
    </section>
  )
}

export default Fundamentos