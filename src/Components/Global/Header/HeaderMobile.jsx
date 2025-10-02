import React, { useState, useRef } from 'react'
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
import IdiomasMenuMobile from './IdiomasMenuMobile'
import AcessibilidadeMenuMobile from './AcessibilidadeMenuMobile'
import useOutsideClick from '../../Hooks/useOutsideClick'

const HeaderMobile = () => {
  const { theme } = React.useContext(GlobalContext)
  const { t } = useTranslation()

  const [showMenu, setShowMenu] = useState(false)
  const [showAcessibility, setShowAcessibility] = useState(false)
  const [showIdiomas, setShowIdiomas] = useState(false)
  
  const idiomasMenuRef = useRef()
  const idiomasButtonRef = useRef()
  const acessMenuRef = useRef()
  const acessButtonRef = useRef()

  useOutsideClick(idiomasMenuRef, () => setShowIdiomas(false), showIdiomas, idiomasButtonRef)
  useOutsideClick(acessMenuRef, () => setShowAcessibility(false), showAcessibility, acessButtonRef)

  return (
    <>
      {showIdiomas && <IdiomasMenuMobile setShowIdiomas={setShowIdiomas} ref={idiomasMenuRef}/>}
      {showAcessibility && <AcessibilidadeMenuMobile setShowAcessibility={setShowAcessibility} ref={acessMenuRef}/>}
      {showMenu && <HeaderMobileMenu setShowMenu={setShowMenu} />}
      <div className={`fixed bottom-0 left-0 w-full bg-gray-50 dark:bg-dark flex justify-center px-4 items-center z-80 lg:hidden border-t-2 border-vermelho ${showMenu ? 'hidden' : 'flex'}`}>
        <ul className='grid grid-cols-5 gap-4 text-dark px-4 w-full justify-between items-center text-bold'>
          <li>
            <NavLink to='/' className='flex flex-col items-center'>
              <img src={theme === 'dark' ? homeDark : homeLight} className='w-6' alt="" />
              <span className='text-bold font-sans text-xs dark:text-gray-50'>{t('header.nav.home')}</span>
            </NavLink>
          </li>
          <li className='flex justify-center'>
            <button ref={idiomasButtonRef} className='flex flex-col items-center' onClick={() => setShowIdiomas(!showIdiomas)}>
              <img src={theme === 'dark' ? idiomasDark : idiomasLight} className='w-6' alt="" />
              <span className='text-bold font-sans text-xs dark:text-gray-50'>{t('header.nav.idioms')}</span>
            </button>
          </li>
          <li className='flex justify-center'>
            <button className='h-15 max-md:h-13 w-14 bg-gray-50 dark:bg-dark rounded-full flex flex-col justify-center items-center p-2 shadow-lg gap-1.5 cursor-pointer border-2 border-vermelho -translate-y-3'
              onClick={() => setShowMenu(!showMenu)}>
              <span className={`w-6 max-md:w-5 h-0.5 bg-dark dark:bg-gray-50 block rounded-2xl transition-transform duration-300 ${showMenu ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 max-md:w-5 bg-dark block dark:bg-gray-50 rounded-2xl transition-opacity duration-300 ${showMenu ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 max-md:w-5 bg-dark block dark:bg-gray-50 rounded-2xl transition-transform duration-300 ${showMenu ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </li>
          <li className='flex justify-center'>
            <button ref={acessButtonRef} className='flex flex-col items-center cursor-pointer' onClick={() => setShowAcessibility(!showAcessibility)}>
              <img src={theme === 'dark' ? acessibilidadeDark2 : acessibilidadeLight2} className='w-6' alt="" />
              <span className='text-bold font-sans text-xs dark:text-gray-50'>{t('header.nav.acessibility')}</span>
            </button>
          </li>
          <li>
            <NavLink to='/busca' className='flex flex-col items-center'>
              <img src={theme === 'dark' ? searchDark : searchLight} className='w-6' alt="" />
              <span className='text-bold font-sans text-xs dark:text-gray-50'>{t('header.nav.search')}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default HeaderMobile