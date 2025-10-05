import React from 'react'
import acessibilidadeDark from '../../assets/icons/acessibilidadeDark.svg'
import acessibilidadeLight from '../../assets/icons/acessibilidadeLight.svg'
import { GlobalContext } from './Context/GlobalContext'
import AcessibilidadeMenu from './Header/AcessibilidadeMenu'
import useOutsideClick from '../Hooks/useOutsideClick'

const FloatingAccessibilityButton = () => {
  const [showMenu, setShowMenu] = React.useState(false)
  const menuRef = React.useRef(null)
  const buttonRef = React.useRef(null)
  const global = React.useContext(GlobalContext)

  useOutsideClick(menuRef, () => setShowMenu(false), showMenu, buttonRef)

  return (
    <>
      {/* Botão fixo no canto inferior direito */}
      <button
        ref={buttonRef}
        onClick={() => setShowMenu(!showMenu)}
        className="fixed bottom-6 right-6 z-[100] bg-amarelo hover:bg-amarelo-dark shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amarelo/50"
        aria-label="Abrir menu de acessibilidade"
      >
        <img 
          src={global.theme === 'light' ? acessibilidadeLight : acessibilidadeDark} 
          alt="Acessibilidade" 
          className="size-8"
        />
      </button>

      {/* Menu de acessibilidade posicionado acima do botão */}
      {showMenu && (
        <div className="fixed bottom-28 right-6 z-[99] max-h-[calc(100vh-150px)] overflow-y-auto">
          <AcessibilidadeMenu ref={menuRef} />
        </div>
      )}
    </>
  )
}

export default FloatingAccessibilityButton
