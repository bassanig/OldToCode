import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStorage } from './Components/Global/Context/GlobalStorage'


import Header from "./Components/Global/Header/Header"
// eslint-disable-next-line no-unused-vars
import i18n from './locales/i18'
import Home from './Components/Home/Home'
import Fundamentos from './Components/Fundamentos/Fundamentos'
import NaoEncontrada from './Components/Global/NaoEncontrada'
import Desenvolvedores from './Components/Home/Desenvolvedores'
import AlKhwarizmPage from './Components/Biografia/AlKhwarizmPage'
import BiografiasPage from './Components/Biografia/BiografiasPage'



function App() {
  return (
    <GlobalStorage>
      <div className='bg-gray-50 dark:bg-dark'>
        <BrowserRouter>
          <Header />
          <Routes>
              
              //todas rotas de biografias
              <Route path="biografias/al-khwarizm" element={<AlKhwarizmPage/>}/>

              //rotas da navbar
              <Route path="/" element={<Home />}/>
              <Route path='/biografias' element={<BiografiasPage />}/>
              <Route path="/fundamentos" element={<Fundamentos />}/>
              <Route path="/cronologia" element={<div className="text-white text-3xl p-8">Cronologia</div>} />
              <Route path="/quiz" element={<div className="text-white text-3xl p-8">Quiz</div>} />


              <Route path="*" element={<NaoEncontrada />} />
              <Route path="/desenvolvedores" element={<Desenvolvedores />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalStorage>
  )
}

export default App
