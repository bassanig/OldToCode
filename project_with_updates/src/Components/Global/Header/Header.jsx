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
import GlobalSearch from '../../Search/GlobalSearch'

const Header = () => {
  const [showIdiomas, setShowIdiomas] = React.useState(false)
  const [showAcess, setShowAcess] = React.useState(false)
  const [isFixed, setIsFixed] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);
  const menuRef = React.useRef(null)
  const acessRef = React.useRef(null)
  const idiomasButtonRef = React.useRef(null)
  const acessButtonRef = React.useRef(null)
  const headerRef = React.useRef(null);
  const global = React.useContext(GlobalContext);

  useOutsideClick(menuRef, () => setShowIdiomas(false), showIdiomas, idiomasButtonRef)
  useOutsideClick(acessRef, () => setShowAcess(false), showAcess, acessButtonRef)

  React.useEffect(() => {
    const handleScroll = () => {
      // Tailwind's sm breakpoint is 640px
      if (window.innerWidth > 640) {
        const banner = document.querySelector('section');
        if (banner && window.scrollY > banner.offsetHeight) {
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

    handleScroll(); // Check position on initial render

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const { t } = useTranslation()

  return (
    <>
      <header ref={headerRef} className={`bg-gray-50 dark:bg-dark left-0 w-full z-90 shadow-md transition-all duration-300 ${isFixed ? 'fixed top-0 animate-slide-down' : 'relative'}`}>
        <div className='container2 mx-auto bg-gray-50 flex justify-between items-center py-4 w-full flex-wrap gap-4 dark:bg-dark transition-colors max-lg:justify-center'>
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
                <NavLink to='/quizes' className='text-xl group relative'>
                  {t('header.nav.quiz')}
                  <span
                      className="absolute left-0 -bottom-1.5 w-0 h-1 bg-amarelo transition-all duration-300 group-hover:w-[40%]"
                    />
                </NavLink>
              </li>
            </ul>
            <div id='Acessibilidade' className='*:size-10 flex gap-6'>
              <button 
                className='hover:cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors' 
                onClick={() => setShowSearch(true)}
                title={t('search.title')}
              >
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
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
      {isFixed && <div style={{ height: headerRef.current ? headerRef.current.offsetHeight : 0 }} />}
      <GlobalSearch isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </>
  )
}

export default Header