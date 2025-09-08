import React, { useEffect } from 'react'

import { GlobalContext } from './GlobalContext'

export const GlobalStorage = ({children}) => {
  const [theme, setTheme] = React.useState('light')

  // Sincroniza o tema com a classe 'dark' do Tailwind
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const globalContext = {
    theme,
    setTheme
  }

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  )
}