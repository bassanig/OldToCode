import React from 'react'
import { useTranslation } from 'react-i18next'

const FloatingSearchButton = ({ onClick }) => {
  const { t } = useTranslation()

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 left-6 z-[100] bg-amarelo hover:bg-amarelo-dark shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amarelo/50"
      aria-label={t('search.button') || 'Abrir busca'}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="text-white"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  )
}

export default FloatingSearchButton
