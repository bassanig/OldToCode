import React from 'react'
import { NavLink } from 'react-router-dom'
import acessibilidadeLight2 from '../../../assets/icons/acessibilidadeLight2.svg'
import acessibilidadeDark2 from '../../../assets/icons/acessibilidadedDark2.svg'
import idiomasDark from '../../../assets/icons/idiomasDark.svg'
import idiomasLight from '../../../assets/icons/idiomasLight.svg'
import homeDark from '../../../assets/icons/homeDark.svg'
import homeLight from '../../../assets/icons/homeLight.svg'
import searchDark from '../../../assets/icons/searchDark.svg'
import searchLight from '../../../assets/icons/searchLight.svg'
import { GlobalContext } from '../Context/GlobalContext'
import { useTranslation } from 'react-i18next'
import HeaderMobileMenu from './HeaderMobileMenu'

const HeaderMobile = () => {
  const { theme } = React.useContext(GlobalContext)
  const { t } = useTranslation()

  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <>
      {showMenu && <HeaderMobileMenu setShowMenu={setShowMenu} />}
      <div className={`fixed bottom-0 left-0 w-full bg-gray-50 dark:bg-dark flex justify-center px-4 items-center z-80 lg:hidden border-t-2 border-vermelho ${showMenu ? 'hidden' : 'flex'}`}>
        <ul className='grid grid-cols-5 gap-4 text-dark px-4 w-full justify-between items-center text-bold'>
          <li>
            <NavLink to='/' className='flex flex-col items-center'>
              <img src={theme === 'dark' ? homeDark : homeLight} className='w-6' alt="" />
              <span className='text-bold font-sans text-xs'>{t('header.nav.home')}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/idiomas' className='flex flex-col items-center'>
              <img src={theme === 'dark' ? idiomasDark : idiomasLight} className='w-6' alt="" />
              <span className='text-bold font-sans text-xs'>Idiomas</span>
            </NavLink>
          </li>
          <li className=''>
            <button className='size-15 bg-gray-50 rounded-full flex flex-col justify-center items-center p-2 shadow-lg gap-1.5 cursor-pointer border-2 border-vermelho -translate-y-3'
              onClick={() => setShowMenu(!showMenu)}>
              <span className={`w-6 h-0.5 bg-dark block rounded-2xl transition-transform duration-300 ${showMenu ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-dark block rounded-2xl transition-opacity duration-300 ${showMenu ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-dark block rounded-2xl transition-transform duration-300 ${showMenu ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </li>
          <li>
            <NavLink to='/acessibilidade' className='flex flex-col items-center'>
              <img src={theme === 'dark' ? acessibilidadeDark2 : acessibilidadeLight2} className='w-6' alt="" />
              <span className='text-bold font-sans text-xs'>Acessibilidade</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/busca' className='flex flex-col items-center'>
              <img src={theme === 'dark' ? searchDark : searchLight} className='w-6' alt="" />
              <span className='text-bold font-sans text-xs'>Busca</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default HeaderMobile