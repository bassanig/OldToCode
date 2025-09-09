import React from 'react'
import { GlobalContext } from '../Context/GlobalContext'

const fontSizes = [
  { label: 'A-', value: 0 },
  { label: 'A', value: 1 },
  { label: 'A+', value: 2 },
]

const AcessibilidadeMenu = React.forwardRef((props, ref) => {
  const { fontSizeLevel, changeFontSize } = React.useContext(GlobalContext)

  return (
    <div
      ref={ref}
      className="absolute right-0 mt-2 bg-white rounded shadow-lg p-4 z-50 border-amarelo border-4 flex flex-col gap-2"
    >
      {fontSizes.map((size) => (
        <label key={size.value} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="fontSize"
            checked={fontSizeLevel === size.value}
            onChange={() => changeFontSize(size.value)}
          />
          <span className="text-lg">{size.label}</span>
        </label>
      ))}
    </div>
  )
})

export default AcessibilidadeMenu