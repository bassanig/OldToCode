import React from 'react'
import { useTranslation } from 'react-i18next'

const IdiomasMenu = React.forwardRef((props, ref) => {
  const { i18n } = useTranslation()
  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn)
  }

  return (
  <div ref={ref} className="absolute right-0 grid grid-cols-1 bg-gray-50  rounded shadow-lg p-4 z-50 border-amarelo border-4 transition">
    <button className="block w-full text-left py-2 px-4 hover:bg-gray-100" onClick={() => changeLanguage('pt')} >Português</button>
    <button className="block w-full text-left py-2 px-4 hover:bg-gray-100" onClick={() => changeLanguage('en')}>English</button>
  </div>
    )
  })

export default IdiomasMenu