import React from 'react'
import { NavLink, } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logoDark from '../../../assets/icons/logoDark.svg'
import logoLight from '../../../assets/icons/logoLight.svg'
import arrowDark from '../../../assets/icons/arrowDark.svg'
import arrowLight from '../../../assets/icons/arrowLight.svg'
import idiomas from '../../../assets/icons/idiomas.svg'
import brasil from '../../../assets/icons/brasil.svg'
import { GlobalContext } from '../Context/GlobalContext'
import IdiomasMenuDesktop from './IdiomasMenuDesktop'
import useOutsideClick from '../../Hooks/useOutsideClick'
import SearchModal from '../../Search/SearchModal' // CORREÇÃO FINAL APLICADA
import acessibilidadeDark from '../../../assets/icons/acessibilidadeDark.svg'
import acessibilidadeLight from '../../../assets/icons/acessibilidadeLight.svg'

import CronologiaMenu from './CronologiaMenu';
import FundamentosMenu from './FundamentosMenu';
import { CSSTransition } from 'react-transition-group';
import AcessibilidadeMenu from './AcessibilidadeMenu';

const Header = () => {
  const [showIdiomas, setShowIdiomas] = React.useState(false)
  const [showAcessibilidade, setShowAcessibilidade] = React.useState(false)
  const [showCronologia, setShowCronologia] = React.useState(false)
  const [showFundamentos, setShowFundamentos] = React.useState(false)
  const [isFixed, setIsFixed] = React.useState(false);
  const [showSearchModal, setShowSearchModal] = React.useState(false);

  const menuRef = React.useRef(null)
  const acessibilidadeMenuRef = React.useRef(null)
  const cronologiaMenuRef = React.useRef(null)
  const fundamentosMenuRef = React.useRef(null)
  const idiomasButtonRef = React.useRef(null)
  const acessibilidadeButtonRef = React.useRef(null)
  const cronologiaButtonRef = React.useRef(null)
  const fundamentosButtonRef = React.useRef(null)
  const headerRef = React.useRef(null);
  const searchButtonRef = React.useRef(null);

  const global = React.useContext(GlobalContext);

  useOutsideClick(menuRef, () => setShowIdiomas(false), showIdiomas, idiomasButtonRef)
  useOutsideClick(acessibilidadeMenuRef, () => setShowAcessibilidade(false), showAcessibilidade, acessibilidadeButtonRef)
  useOutsideClick(cronologiaMenuRef, () => setShowCronologia(false), showCronologia, cronologiaButtonRef)
  useOutsideClick(fundamentosMenuRef, () => setShowFundamentos(false), showFundamentos, fundamentosButtonRef)

  const toggleFundamentos = () => {
    setShowFundamentos(!showFundamentos);
    setShowCronologia(false);
  };

  const toggleCronologia = () => {
    setShowCronologia(!showCronologia);
    setShowFundamentos(false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      // Tailwind's sm breakpoint is 640px
      if (window.innerWidth > 640) {
        if (window.scrollY > 10) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const { t, i18n } = useTranslation()

  const theme = global.theme

  return (
    <>
      <header ref={headerRef} className={`bg-gray-50 dark:bg-dark left-0 w-full z-80 shadow-md transition-all duration-300 ${isFixed ? '' : 'relative'}`}>
        <div className='container2 mx-auto z-50 relative bg-gray-50 flex justify-between items-center py-4 w-full flex-wrap gap-4 dark:bg-dark transition-colors max-lg:justify-center'>
          <div>
            <NavLink to='/'><img src={global.theme === 'light' ? logoLight : logoDark} alt="logo" className='w-50 max-2xl:w-40' /></NavLink>
          </div>
          <nav className='*:text-black flex font-medium *:text-lg gap-4 lg:gap-8 items-center max-md:hidden flex-wrap justify-end max-lg:hidden'>
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
                  />                  </NavLink>
              </li>
              <li>
                <button ref={fundamentosButtonRef} onClick={toggleFundamentos} className='text-xl cursor-pointer flex group relative items-center gap-1 dark:text-white'>
                  {t('header.nav.fundamentals')}
                  <img src={theme === 'light' ? arrowDark : arrowLight} alt="" className={`rotate-90 size-5 transition duration-300 ${showFundamentos && 'rotate-270'}`} />
                  <span
                    className="absolute left-0 -bottom-1.5 w-0 h-1 bg-amarelo transition-all duration-300 group-hover:w-[40%]"
                  />                </button>
              </li>
              <li>
                <button ref={cronologiaButtonRef} onClick={toggleCronologia} className='text-xl cursor-pointer flex group relative items-center gap-1 dark:text-white'>
                  {t('header.nav.chronology')}
                  <img src={theme === 'light' ? arrowDark : arrowLight} alt="" className={`rotate-90 size-5 transition duration-300 ${showCronologia && 'rotate-270'}`} />
                  <span
                    className="absolute left-0 -bottom-1.5 w-0 h-1 bg-amarelo transition-all duration-300 group-hover:w-[40%]"
                  />                </button>
              </li>
              <li>
                <NavLink to='/quizes' className='text-xl group relative'>
                  {t('header.nav.quiz')}
                  <span
                    className="absolute left-0 -bottom-1.5 w-0 h-1 bg-amarelo transition-all duration-300 group-hover:w-[40%]"
                  />
                </NavLink>
              </li>
            </ul>

            {/* INÍCIO: Seção de Ícone de Busca e Idiomas */}
            <div className='flex gap-4 items-center'>


              {/* Botão de Acessibilidade */}
              <div id='Acessibilidade' className='*:size-10 flex gap-6'>
                <button ref={acessibilidadeButtonRef} className='hover:cursor-pointer' onClick={() => setShowAcessibilidade(!showAcessibilidade)}>
                  <img src={theme === 'light' ? acessibilidadeLight : acessibilidadeDark} alt="" />
                </button>
              </div>
              {/* Botão de Idiomas */}
              <div id='Idiomas' className='*:size-10 flex gap-6'>
                <button
                  ref={idiomasButtonRef}
                  className='hover:cursor-pointer'
                  onClick={() => setShowIdiomas(!showIdiomas)}
                >
                  <img
                    src={i18n.language === 'pt' ? brasil : idiomas}
                    alt="Selecionar idioma"
                  />
                </button>
              </div>
            </div>
            {/* FIM: Seção de Ícone de Busca e Idiomas */}

            {showIdiomas && <IdiomasMenuDesktop ref={menuRef} setShowIdiomas={setShowIdiomas} />}
            <div className='absolute top-0 right-0'>
              {showAcessibilidade && <AcessibilidadeMenu ref={acessibilidadeMenuRef} />}
            </div>
          </nav>
        </div>
        {showCronologia && <CronologiaMenu setShowCronologia={setShowCronologia} />}
        {showFundamentos && <FundamentosMenu setShowFundamentos={setShowFundamentos} />}
      </header>

      {/* RENDERIZAÇÃO DO MODAL DE BUSCA */}
      {showSearchModal && <SearchModal onClose={() => setShowSearchModal(false)} />}
    </>
  )
}

export default Header