import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logoDark from '../../../assets/icons/logoDark.svg'
import logoLight from '../../../assets/icons/logoLight.svg'
import acessibilidadeDark from '../../../assets/icons/acessibilidadeDark.svg'
import acessibilidadeLight from '../../../assets/icons/acessibilidadeLight.svg'
import idiomas from '../../../assets/icons/idiomas.svg'
import { GlobalContext } from '../Context/GlobalContext'
import IdiomasMenuDesktop from './IdiomasMenuDesktop'
import AcessibilidadeMenu from './AcessibilidadeMenu'
import useOutsideClick from '../../Hooks/useOutsideClick'

//Mudança de Idioma, tipo o menu e as config pra mudar

const Header = () => {
  const [showIdiomas, setShowIdiomas] = React.useState(false)
  const [showAcess, setShowAcess] = React.useState(false)
  const menuRef = React.useRef(null)
  const acessRef = React.useRef(null)
  const idiomasButtonRef = React.useRef(null)
  const acessButtonRef = React.useRef(null)
  const global = React.useContext(GlobalContext);

  useOutsideClick(menuRef, () => setShowIdiomas(false), showIdiomas, idiomasButtonRef)
  useOutsideClick(acessRef, () => setShowAcess(false), showAcess, acessButtonRef)


  const { t } = useTranslation()

  //retorno do header completo
  return (
    <header className='bg-gray-50 dark:bg-dark fixed top-0 left-0 w-full z-50 shadow-md transition-colors '> 
      <div className='container bg-gray-50 flex justify-between items-center py-4 w-full flex-wrap gap-4 dark:bg-dark transition-colors max-lg:justify-center'>
        <div>
          <NavLink to='/'><img src={global.theme === 'light' ? logoLight : logoDark} alt="logo" className='w-50 max-xl:w-40'/></NavLink>
        </div>
        <nav className='*:  text-black flex font-medium *:text-lg gap-4 lg:gap-8 items-center max-md:hidden flex-wrap justify-end max-lg:hidden'>
          <ul className='flex gap-8 *:dark:text-white *:*:max-[1280px]:text-[1.1rem]'>
            <li>
              <NavLink to='/' className='text-xl relative group'>
              {t('header.nav.home')}  
                <span
                  className="absolute left-0 -bottom-1.5 w-0 h-1 bg-amarelo transition-all duration-300 group-hover:w-[40%]"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to='/biografias' className='text-xl relative group'>
              {t('header.nav.biography')}  
                <span
                  className="absolute left-0 -bottom-1.5 w-0 h-1 bg-amarelo transition-all duration-300 group-hover:w-[40%]"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to='fundamentos' className='text-xl relative group'>
                {t('header.nav.fundamentals')}
                <span
                    className="absolute left-0 -bottom-1.5 w-0 h-1 bg-amarelo transition-all duration-300 group-hover:w-[20%]"
                  />
                </NavLink>
            </li>
            <li>
              <NavLink to='cronologia' className='text-xl group relative'>
                {t('header.nav.chronology')}
                <span
                    className="absolute left-0 -bottom-1.5 w-0 h-1 bg-amarelo transition-all duration-300 group-hover:w-[40%]"
                  />
                </NavLink>
            </li>
            <li>
              <NavLink to='quiz' className='text-xl group relative'>
                {t('header.nav.quiz')}
                <span
                    className="absolute left-0 -bottom-1.5 w-0 h-1 bg-amarelo transition-all duration-300 group-hover:w-[40%]"
                  />
              </NavLink>
            </li>
          </ul>
          <div id='Acessibilidade' className='*:size-10 flex gap-6'>
            <button ref={idiomasButtonRef} className='hover:cursor-pointer' onClick={() => setShowIdiomas(!showIdiomas)}>
              <img src={idiomas} alt="" />
            </button>
            <button ref={acessButtonRef} className='hover:cursor-pointer' onClick={() => setShowAcess(!showAcess)}>
              <img src={global.theme === 'light' ? acessibilidadeLight : acessibilidadeDark} alt="" />
            </button>
          </div>
          {showIdiomas && <IdiomasMenuDesktop ref={menuRef} setShowIdiomas={setShowIdiomas} />}
          {showAcess && <AcessibilidadeMenu ref={acessRef}/>}
        </nav>      
      </div>
    </header>
  )
}

export default Header