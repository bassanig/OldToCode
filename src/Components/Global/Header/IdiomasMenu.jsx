import React from 'react'
import { useTranslation } from 'react-i18next'

const IdiomasMenu = React.forwardRef(({setShowIdiomas}, ref) => {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn)
    setShowIdiomas(false)
  }

  return (
    <div ref={ref} className="fixed inset-0 bg-gray-50 shadow-lg p-4 z-90 transition dark:bg-dark">
      <div className='flex flex-col items-center mb-8'>
        <button onClick={() => setShowIdiomas(false)} className='relative size-6 mb-8 py-4 cursor-pointer'>
          <span className='w-6 h-0.5 bg-dark block rounded-2xl rotate-45 absolute top-1/2 dark:bg-gray-50'></span>
          <span className='w-6 h-0.5 bg-dark block rounded-2xl -rotate-45 absolute top-1/2 dark:bg-gray-50'></span>
        </button>
        <h1 className='text-3xl mb-16 dark:text-gray-50'>Navegue nas opções</h1>
      </div>
      <div className='flex flex-col gap-8 w-full justify-center items-center'>
        <button className='text-xl p-4 px-6 active:bg-gray-100 cursor-pointer max-w-fit dark:text-gray-50 dark:active:bg-gray-700' onClick={() => changeLanguage('en')}>
          {t('languages.english')}
        </button>
        <button className='text-xl p-4 px-6 active:bg-gray-100 cursor-pointer max-w-fit dark:text-gray-50 dark:active:bg-gray-700' onClick={() => changeLanguage('pt')}>
          {t('languages.portuguese')}
        </button>
      </div>
    </div>
    )
  })

export default IdiomasMenu