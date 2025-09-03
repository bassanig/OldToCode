import React from 'react'
import { NavLink } from 'react-router-dom'

const IdiomasMenu = React.forwardRef((props, ref) => (
  <div ref={ref} className="absolute right-0 grid grid-cols-1 bg-white border rounded shadow-lg p-4 z-50 border-amarelo border-4 transition">
    <button className="block w-full text-left py-2 px-4 hover:bg-gray-100">Português</button>
    <button className="block w-full text-left py-2 px-4 hover:bg-gray-100">English</button>
  </div>
))

const Header = () => {
  const [showIdiomas, setShowIdiomas] = React.useState(false);
  const menuRef = React.useRef(null)

  React.useEffect(() => {
    if (!showIdiomas) return

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowIdiomas(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showIdiomas])

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
          <button className='hover:cursor-pointer' onClick={() => setShowIdiomas(!showIdiomas)}>
            <img src="../public/imgs/icons/idioma.png" alt="" />
          </button>
          <button className='hover:cursor-pointer' onClick={() => alert('Função ainda não implementada')}>
            <img src="../public/imgs/icons/acessibilidade.png" alt="" />
          </button>
        </div>
        {showIdiomas && <IdiomasMenu ref={menuRef} />}
      </nav>
    </div>
  )
}

export default Header