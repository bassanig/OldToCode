import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logoDark from '../../assets/icons/logoDark.svg'
import logoLight from '../../assets/icons/logoLight.svg'
import { GlobalContext } from './Context/GlobalContext'

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

  const global = React.useContext(GlobalContext);

  //retorno do header completo
  return (
    <header className='bg-light dark:bg-dark'>
      <div className='container bg-light flex justify-between items-center py-4 w-full flex-wrap gap-4 dark:bg-dark'>
        <div>
          <NavLink to='/'><img src={global.theme === 'light' ? logoLight : logoDark} alt="logo" className='w-50'/></NavLink>
        </div>
        <nav className='*:text-black flex font-medium *:text-lg gap-8 items-center'>
          <ul className='flex gap-8 *:dark:text-white'>
            <li>
              <NavLink to='/' className='text-xl relative group'>
              {t('header.nav.home')}  
                <span
                  className="absolute left-0 -bottom-1.5 w-0 h-1 bg-amarelo transition-all duration-300 group-hover:w-full"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to='fundamentos' className='text-xl relative group'>
                {t('header.nav.fundamentals')}
                <span
                    className="absolute left-0 -bottom-1.5 w-0 h-1 bg-amarelo transition-all duration-300 group-hover:w-full"
                  />
                </NavLink>
            </li>
            <li>
              <NavLink to='cronologia' className='text-xl group relative'>
                {t('header.nav.chronology')}
                <span
                    className="absolute left-0 -bottom-1.5 w-0 h-1 bg-amarelo transition-all duration-300 group-hover:w-full"
                  />
                </NavLink>
            </li>
            <li>
              <NavLink to='quiz' className='text-xl group relative'>
                {t('header.nav.quiz')}
                <span
                    className="absolute left-0 -bottom-1.5 w-0 h-1 bg-amarelo transition-all duration-300 group-hover:w-full"
                  />
              </NavLink>
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
    </header>
  )
}

export default Header