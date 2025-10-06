import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import conteudos from '../../../data/conteudos.json'


const HeaderMobileMenu = ({ setShowMenu }) => {
  const { t, i18n } = useTranslation();
  const [openDropdowns, setOpenDropdowns] = React.useState({ fundamentos: false, cronologia: false });
  const location = useLocation();
  const [sliderStyle, setSliderStyle] = React.useState({ top: 0, height: 0, opacity: 0 });
  const navLinksRef = React.useRef({});

  React.useEffect(() => {
    const activePath = location.pathname;
    const activeLinkRef = navLinksRef.current[activePath];

    if (activeLinkRef) {
      const { offsetTop, clientHeight } = activeLinkRef;
      setSliderStyle({
        top: offsetTop,
        height: clientHeight,
        opacity: 1,
      });
    } else {
      setSliderStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [location.pathname]);

  return (
    <div className='fixed inset-0 dark:bg-dark bg-gray-50 bg-opacity-50 backdrop-blur-sm flex flex-col p-8 z-90'>
      <div className='flex flex-col items-center mb-8'>
        <button onClick={() => setShowMenu(false)} className='relative size-6 mb-8 py-4'>
          <span className='w-6 h-0.5 bg-dark block rounded-2xl rotate-45 absolute top-1/2 dark:bg-gray-50'></span>
          <span className='w-6 h-0.5 bg-dark block rounded-2xl -rotate-45 absolute top-1/2 dark:bg-gray-50'></span>
        </button>
        <h1 className='text-3xl mb-16 dark:text-gray-50'>Navegue nas opções</h1>
      </div>
      <ul className='relative flex flex-col gap-8 *:dark:text-white'>
        <div className='absolute -left-4 w-1 bg-vermelho dark:bg-amarelo rounded-full transition-all duration-300 ease-in-out' style={sliderStyle} />
        <li ref={el => (navLinksRef.current['/'] = el)}>
          <NavLink to='/' className='text-xl relative group w-full block px-4 py-3 text-left' onClick={() => setShowMenu(false)}>
            {t('header.nav.home')}
          </NavLink>
        </li>
        <li ref={el => (navLinksRef.current['/biografias'] = el)}>
          <NavLink to='/biografias' className='text-xl relative group w-full block px-4 py-3 text-left' onClick={() => setShowMenu(false)}>
            {t('header.nav.biography')}
          </NavLink>
        </li>
        {/* Fundamentos dropdown */}
        <li ref={el => (navLinksRef.current['/fundamentos'] = el)}>
          <div>
            <button
              onClick={() => setOpenDropdowns(prev => ({ ...prev, fundamentos: !prev.fundamentos }))}
              className='text-xl relative group flex items-center gap-2 w-full px-4 py-3 text-left'
              aria-expanded={openDropdowns.fundamentos}
            >
              {t('header.nav.fundamentals')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`size-5 ml-1 transition-transform duration-300 ${openDropdowns.fundamentos ? 'rotate-180' : 'rotate-0'}`}
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {/** lista dos 3 primeiros fundamentos */}
            {openDropdowns.fundamentos && (
              <ul className='mt-2 ml-0 flex flex-col gap-2'>
                {Object.keys(conteudos).filter(k => k.startsWith('fundamentos-')).slice(0,3).map(key => (
                  <li key={key}>
                    <NavLink to={`/conteudo/${key}`} className='text-lg block w-full px-6 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800' onClick={() => setShowMenu(false)}>
                      {conteudos[key][i18n.language]?.titulo || conteudos[key]['pt'].titulo}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>

        {/* Cronologia dropdown */}
        <li ref={el => (navLinksRef.current['/cronologia'] = el)}>
          <div>
            <button
              onClick={() => setOpenDropdowns(prev => ({ ...prev, cronologia: !prev.cronologia }))}
              className='text-xl relative group flex items-center gap-2 w-full px-4 py-3 text-left'
              aria-expanded={openDropdowns.cronologia}
            >
              {t('header.nav.chronology')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`size-5 ml-1 transition-transform duration-300 ${openDropdowns.cronologia ? 'rotate-180' : 'rotate-0'}`}
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {openDropdowns.cronologia && (
              <ul className='mt-2 ml-0 flex flex-col gap-2'>
                {Object.keys(conteudos).filter(k => k.startsWith('cronologia-')).slice(0,3).map(key => (
                  <li key={key}>
                    <NavLink to={`/conteudo/${key}`} className='text-lg block w-full px-6 py-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800' onClick={() => setShowMenu(false)}>
                      {conteudos[key][i18n.language]?.titulo || conteudos[key]['pt'].titulo}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
        <li ref={el => (navLinksRef.current['/quizes'] = el)}>
          <NavLink to='/quizes' className='text-xl relative group w-full block px-4 py-3 text-left' onClick={() => setShowMenu(false)}>
            {t('header.nav.quiz')}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default HeaderMobileMenu