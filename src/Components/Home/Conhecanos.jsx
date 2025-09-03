import React from 'react'
import { NavLink } from 'react-router-dom'

const Conhecanos = () => {
  return (
    <section className='container'>
      <div className='flex items-center gap-6 mt-16 mb-8'>
        <span className='w-2 h-20 bg-amarelo inline-block'></span>
        <h1 className='text-7xl font-bold font-serif text-vermelho'>Conheça-nos</h1>
      </div>
      <p className='text-2xl font-sans mb-8'>A OldToCode é um portal dedicado a explorar as origens da computação, conduzindo o leitor em uma jornada histórica que se inicia na era pré-histórica, com as primeiras formas de contagem e registro, e se estende até o surgimento das calculadoras mecânicas. Nosso objetivo é apresentar, de forma clara e documentada, como o pensamento lógico e os instrumentos de cálculo evoluíram ao longo dos séculos, revelando as bases tecnológicas e conceituais que pavimentaram o caminho para a era digital. Ao resgatar esse percurso, buscamos oferecer uma compreensão sólida sobre a importância dessas inovações e seu papel na formação do mundo moderno.</p>
     
      <div className='flex justify-start mb-40'>
        <NavLink to='desenvolvedores'><h1 className='mb-40 text-3xl py-4 px-6 font-bold bg-amarelo rounded-2xl'>Desenvolvedores</h1></NavLink>
      </div>
    </section>
  )
}

export default Conhecanos