import React from 'react'
import { NavLink } from 'react-router-dom'
import logoDark from '../../assets/icons/logoDark.svg'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <section className='bg-vermelho w-full'>
      <div className='container py-20'>
        <div className='flex flex-col'>
          <NavLink to='/'><img src={logoDark} alt="" /></NavLink>
          <ul className='text-white text-2xl space-y-4 mt-8'>
            <li><NavLink to='/'>{t('header.nav.home')}</NavLink></li>
            <li><NavLink to='/biografias'>{t('header.nav.biography')}</NavLink></li>
            <li><NavLink to='/sobre'>{t('header.nav.fundamentals')}</NavLink></li>
            <li><NavLink to='/contato'>{t('header.nav.chronology')}</NavLink></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer