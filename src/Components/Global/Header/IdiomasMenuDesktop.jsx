import React from 'react'
import { useTranslation } from 'react-i18next'

const IdiomasMenuDesktop = React.forwardRef(({setShowIdiomas}, ref) => {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn)
    setShowIdiomas(false)
  }

  return (
    <div
      ref={ref}
      className="absolute right-0 mt-2 bg-white rounded shadow-lg p-4 z-50 border-amarelo border-4 flex flex-col gap-2 dark:bg-gray-800"
    >
      <button className='text-lg dark:text-white hover:text-amarelo dark:hover:text-amarelo' onClick={() => changeLanguage('en')}>
        {t('languages.english')}
      </button>
      <button className='text-lg dark:text-white hover:text-amarelo dark:hover:text-amarelo' onClick={() => changeLanguage('pt')}>
        {t('languages.portuguese')}
      </button>
    </div>
  )
})

export default IdiomasMenuDesktop
