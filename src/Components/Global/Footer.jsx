import React from 'react'
import { NavLink } from 'react-router-dom'
import logoDark from '../../assets/icons/logoDark.svg'
import { useTranslation } from 'react-i18next'

import instagramIcon from '../../assets/icons/Instagram.svg'
import facebookIcon from '../../assets/icons/Facebook.svg'
import tiktokIcon from '../../assets/icons/LinkedIn.svg'
import xIcon from '../../assets/icons/X.svg'


const Footer = () => {
  const { t } = useTranslation()

  return (
    <section className='bg-vermelho w-full'>
      <div className='container py-20 max-sm:py-10 max-sm:pb-20 flex max-sm:flex-col justify-between gap-4 items-center mx-auto max-md:px-4'>
        <div className='flex flex-col max-md:mb-6 w-full'>
          <NavLink to='/'><img src={logoDark} alt="" className='max-sm:hidden' /></NavLink>
          <ul className='text-white text-2xl space-y-6 mt-8'>
            <li><NavLink to='/'>{t('header.nav.home')}</NavLink></li>
            <li><NavLink to='/biografias'>{t('header.nav.biography')}</NavLink></li>
            <li><NavLink to='/sobre'>{t('header.nav.fundamentals')}</NavLink></li>
            <li><NavLink to='/contato'>{t('header.nav.chronology')}</NavLink></li>
          </ul>
        </div>
        <ul className='flex  *:size-15 gap-4 pr-12  w-full justify-end max-sm:justify-start'>
          <li><a href="https://github.com/bassanig/OldToCode"><img src={xIcon} alt="" /></a></li>
          <li><a href="https://github.com/bassanig/OldToCode"><img src={facebookIcon} alt=""/></a></li>
          <li><a href="https://github.com/bassanig/OldToCode"><img src={instagramIcon} alt=""/></a></li>
          <li><a href="https://github.com/bassanig/OldToCode"><img src={tiktokIcon} alt=""/></a></li>
        </ul>
      </div>
    </section>
  )
}

export default Footer