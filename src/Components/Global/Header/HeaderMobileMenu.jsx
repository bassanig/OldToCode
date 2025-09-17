import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const HeaderMobileMenu = ({ setShowMenu }) => {
  const { t } = useTranslation();
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
          <NavLink to='/' className='text-xl relative group' onClick={() => setShowMenu(false)}>
            {t('header.nav.home')}
          </NavLink>
        </li>
        <li ref={el => (navLinksRef.current['/biografias'] = el)}>
          <NavLink to='/biografias' className='text-xl relative group' onClick={() => setShowMenu(false)}>
            {t('header.nav.biography')}
          </NavLink>
        </li>
        <li ref={el => (navLinksRef.current['/fundamentos'] = el)}>
          <NavLink to='/fundamentos' className='text-xl relative group' onClick={() => setShowMenu(false)}>
            {t('header.nav.fundamentals')}
          </NavLink>
        </li>
        <li ref={el => (navLinksRef.current['/cronologia'] = el)}>
          <NavLink to='/cronologia' className='text-xl group relative' onClick={() => setShowMenu(false)}>
            {t('header.nav.chronology')}
          </NavLink>
        </li>
        <li ref={el => (navLinksRef.current['/quiz'] = el)}>
          <NavLink to='/quiz' className='text-xl group relative' onClick={() => setShowMenu(false)}>
            {t('header.nav.quiz')}
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default HeaderMobileMenu