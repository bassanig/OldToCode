import React from 'react'
import { NavLink } from 'react-router-dom'
import logoDark from '../../assets/icons/logoDark.svg'
import { useTranslation } from 'react-i18next'
import instagramIcon from '../../assets/icons/Instagram.svg'
import facebookIcon from '../../assets/icons/Facebook.svg'
import tiktokIcon from '../../assets/icons/LinkedIn.svg'
import arrowDark from '../../assets/icons/arrowDark.svg'
import arrowLight from '../../assets/icons/arrowLight.svg'
import xIcon from '../../assets/icons/X.svg'
import conteudos from '../../data/conteudos.json';

const Footer = () => {
  const { t, i18n } = useTranslation()
  const [showFundamentos, setShowFundamentos] = React.useState(false)
  const [showCronologia, setShowCronologia] = React.useState(false)

  const toggleFundamentos = () => {
    setShowFundamentos(!showFundamentos);
    setShowCronologia(false);
  };

  const toggleCronologia = () => {
    setShowCronologia(!showCronologia);
    setShowFundamentos(false);
  };

  const fundamentosKeys = Object.keys(conteudos).filter(key =>
    key.startsWith('fundamentos-'),
  );

  const cronologiaKeys = Object.keys(conteudos).filter(key =>
    key.startsWith('cronologia-'),
  );

  return (
    <section className='bg-vermelho w-full'>
      <div className='container py-20 max-sm:py-10 max-sm:pb-20 flex max-sm:flex-col justify-between gap-4 items-center mx-auto max-md:px-4'>
        <div className='flex flex-col max-md:mb-6 w-full'>
          <NavLink to='/'><img src={logoDark} alt="" className='max-sm:hidden' /></NavLink>
          <ul className='text-white text-2xl space-y-6 mt-8 '>
            <li><NavLink to='/'>{t('header.nav.home')}</NavLink></li>
            <li><NavLink to='/biografias'>{t('header.nav.biography')}</NavLink></li>
            <li className="relative">
              <button onClick={toggleFundamentos} className="flex gap-2 items-center">
                {t('header.nav.fundamentals')}
                <img src={arrowLight} className={`rotate-90 ${showFundamentos && 'rotate-270'} transition duration-300`} alt="" />
              </button>
              <ul className={`left-0 mt-2 flex w-48 bg-vermelho rounded-md z-10 ${showFundamentos ? 'block' : 'hidden'}`}>
                {fundamentosKeys.map(key => (
                  <li key={key}>
                    <NavLink
                      to={`/conteudo/${key}`}
                      className="block px-4 py text-xl w-max text-white hover:text-amarelo-dark"
                      onClick={() => setShowFundamentos(false)}
                    >
                      {conteudos[key][i18n.language]?.titulo || conteudos[key]['pt'].titulo}
                    </NavLink>
                  </li>
                ))}
              </ul>
          
            </li>
            <li className="relative">
              <button onClick={toggleCronologia} className="flex gap-2 items-center">
                {t('header.nav.chronology')}
                <img src={arrowLight} className={`rotate-90 ${showCronologia && 'rotate-270'} transition duration-300`} alt="" />
              </button>
              {showCronologia && (
                <ul className="flex left-0 mt-2 w-48 bg-vermelho rounded-md z-10">
                  {cronologiaKeys.map(key => (
                    <li key={key}>
                      <NavLink
                        to={`/conteudo/${key}`}
                        className="block px-4 py-2 text-white text-xl hover:text-amarelo-dark w-max"
                        onClick={() => setShowCronologia(false)}
                      >
                        {conteudos[key][i18n.language]?.titulo || conteudos[key]['pt'].titulo}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
        <ul className='flex  *:size-15 gap-4 pr-12  w-full justify-end max-sm:justify-start'>
          <li><a href="/"><img src={xIcon} alt="" /></a></li>
          <li><a href="/"><img src={facebookIcon} alt=""/></a></li>
          <li><a href="/"><img src={instagramIcon} alt=""/></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Footer