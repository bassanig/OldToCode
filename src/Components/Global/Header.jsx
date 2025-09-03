import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <div className=" py-4 bg-white text-white flex items-center justify-between container mx-auto">
      <div>
        <NavLink to='/'><img src="../public/imgs/icons/logo.svg" alt="logo" className='w-50'/></NavLink>
      </div>
      <nav className='*:text-black flex font-medium *:text-lg gap-8 items-center'>
        <ul className='flex gap-8'>
          <li>
            <NavLink to='/' className='text-xl'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='fundamentos' className='text-xl'>Fundamentos da Computação</NavLink>
          </li>
          <li>
            <NavLink to='cronologia' className='text-xl'>Cronologia</NavLink>
          </li>
          <li>
            <NavLink to='quiz' className='text-xl'>Quiz</NavLink>
          </li>
        </ul>
        <div id='Acessibilidade' className='*:size-10 flex gap-6'>
          <button className='hover:cursor-pointer' onClick={() => alert('Função ainda não implementada')}>
            <img src="../public/imgs/icons/idioma.png" alt="" />
          </button>
          <button className='hover:cursor-pointer' onClick={() => alert('Função ainda não implementada')}>
            <img src="../public/imgs/icons/acessibilidade.png" alt="" />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header