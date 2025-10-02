import React from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import setThemeDark from '../../../assets/icons/setThemeDark.svg'
import setThemeLight from '../../../assets/icons/setThemeLight.svg'

const AcessibilidadeMenu = React.forwardRef((props, ref) => {
  const {
    fontSizeLevel,
    changeFontSize,
    colorFilter,
    setColorFilter,
    isNarratorOn,
    setIsNarratorOn,
    theme,
    setTheme
  } = React.useContext(GlobalContext)

  const colorFilters = [
    { label: 'Normal', value: '' },
    { label: 'Protanopia', value: 'protanopia' },
    { label: 'Deuteranopia', value: 'deuteranopia' },
    { label: 'Tritanopia', value: 'tritanopia' },
  ]

  return (
    <div
      ref={ref}
      className="absolute right-0 top-0 mt-2 bg-white rounded-lg shadow-lg p-6 z-50 border-amarelo border-2 flex flex-col gap-6 w-80 dark:bg-dark"
    >
      <div className="space-y-4">
        <h3 className="text-lg font-semibold dark:text-white">Tamanho da Fonte</h3>
        <input
          type="range"
          min="0"
          max="4"
          step="1"
          value={fontSizeLevel}
          onChange={(e) => changeFontSize(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold dark:text-white">Filtro de Cor</h3>
        <div className="grid grid-cols-2 gap-2">
          {colorFilters.map((filter) => (
            <label key={filter.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="colorFilter"
                checked={colorFilter === filter.value}
                onChange={() => setColorFilter(filter.value)}
                className="form-radio h-4 w-4 text-amarelo focus:ring-amarelo"
              />
              <span className="text-base dark:text-gray-300">{filter.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold dark:text-white">Narrador</h3>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isNarratorOn}
            onChange={() => setIsNarratorOn(!isNarratorOn)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-amarelo-dark dark:peer-focus:ring-amarelo dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amarelo"></div>
          <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-300">
            {isNarratorOn ? 'Ligado' : 'Desligado'}
          </span>
        </label>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold dark:text-white">Tema</h3>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className='p-2 px-4 flex items-center justify-between rounded-2xl gap-2  bg-gray-50 dark:bg-dark shadow-md dark:shadow-2xl'>
          <span className='dark:text-gray-50'>Mudar Tema</span>
          <img src={theme === 'light' ? setThemeDark : setThemeLight} alt="Mudar Tema" className='' />
        </button>
      </div>
    </div>
  )
})

export default AcessibilidadeMenu
