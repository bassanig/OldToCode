import React from 'react'

import { GlobalContext } from './GlobalContext'

export const GlobalStorage = ({children}) => {
  const [ fontSizeLevel, setFontSizeLevel ] = React.useState(0);

  React.useEffect(() => {
    // pega do localStorage se existir
    const saved = localStorage.getItem("fontSizeLevel");
    if (saved) {
      changeFontSize(Number(saved));
    }
  }, []);

  const changeFontSize = (level) => {
    setFontSizeLevel(level);

    const baseSize = 16;
    const newSize = baseSize + level * 2;

    document.documentElement.style.fontSize = `${newSize}px`;
    localStorage.setItem("fontSizeLevel", level);
  };


  const [theme, setTheme] = React.useState('light')

  // Sincroniza o tema com a classe 'dark' do Tailwind
  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const globalContext = {
    theme,
    setTheme,
    fontSizeLevel,
    changeFontSize
  }

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  )
}