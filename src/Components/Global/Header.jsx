import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

//Mudança de Idioma, tipo o menu e as config pra mudar
const IdiomasMenu = React.forwardRef((props, ref) => {
  const { i18n } = useTranslation()
  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn)
  }

  return (
  <div ref={ref} className="absolute right-0 grid grid-cols-1 bg-white border rounded shadow-lg p-4 z-50 border-amarelo border-4 transition">
    <button className="block w-full text-left py-2 px-4 hover:bg-gray-100" onClick={() => changeLanguage('pt')} >Português</button>
    <button className="block w-full text-left py-2 px-4 hover:bg-gray-100" onClick={() => changeLanguage('en')}>English</button>
  </div>
    )
  })

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


  const { t } = useTranslation()

  //retorno do header completo
  return (
    <div className=" py-4 bg-white text-white flex items-center justify-between container mx-auto">
      <div>
        <NavLink to='/'><img src="../public/imgs/icons/logo.svg" alt="logo" className='w-50'/></NavLink>
      </div>
      <nav className='*:text-black flex font-medium *:text-lg gap-8 items-center'>
        <ul className='flex gap-8'>
          <li>
            <NavLink to='/' className='text-xl'>{t('header.nav.home')}</NavLink>
          </li>
          <li>
            <NavLink to='fundamentos' className='text-xl'>{t('header.nav.fundamentals')}</NavLink>
          </li>
          <li>
            <NavLink to='cronologia' className='text-xl'>{t('header.nav.chronology')}</NavLink>
          </li>
          <li>
            <NavLink to='quiz' className='text-xl'>{t('header.nav.quiz')}</NavLink>
          </li>
        </ul>
        <div id='Acessibilidade' className='*:size-10 flex gap-6'>
          <button className='hover:cursor-pointer' onClick={() => setShowIdiomas(!showIdiomas)}>
            <img src="../public/imgs/icons/idioma.png" alt="" />
          </button>
          <button className='hover:cursor-pointer' onClick={() => alert(t('header.nav.home'))}>
            <img src="../public/imgs/icons/acessibilidade.png" alt="" />
          </button>
        </div>
        {showIdiomas && <IdiomasMenu ref={menuRef} />}
      </nav>
    </div>
  )
}

export default Header