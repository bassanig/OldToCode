import React from 'react'

import { GlobalContext } from './GlobalContext'
import useNarrator from '../../Hooks/useNarrator'

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
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(prefersDarkScheme) {
      setTheme('dark');
    }
    console.log(prefersDarkScheme);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const [colorFilter, setColorFilter] = React.useState('');
  const [isNarratorOn, setIsNarratorOn] = React.useState(false);
  const [zoomLevel, setZoomLevel] = React.useState(1);

  useNarrator(isNarratorOn);

  React.useEffect(() => {
    const savedFilter = localStorage.getItem("colorFilter");
    if (savedFilter) {
      setColorFilter(savedFilter);
    }
    const savedZoom = localStorage.getItem("zoomLevel");
    if (savedZoom) {
      setZoomLevel(Number(savedZoom));
    }
  }, []);

  React.useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    if (colorFilter) {
      html.classList.add(colorFilter);
      localStorage.setItem("colorFilter", colorFilter);
    } else {
      localStorage.removeItem("colorFilter");
    }
  }, [colorFilter]);

  React.useEffect(() => {
    document.body.style.zoom = zoomLevel;
    localStorage.setItem("zoomLevel", zoomLevel);
  }, [zoomLevel]);


  const globalContext = {
    theme,
    setTheme,
    fontSizeLevel,
    changeFontSize,
    colorFilter,
    setColorFilter,
    isNarratorOn,
    setIsNarratorOn,
    zoomLevel,
    setZoomLevel
  }

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  )
}