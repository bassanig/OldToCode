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
import HeaderMobile from './Components/Global/Header/HeaderMobile'
import Conteudo from './Components/Global/Conteudo'
import Footer from './Components/Global/Footer'
import QuizesPage from './Components/Quiz/QuizesPage'
import QuizDetail from './Components/Quiz/QuizDetail'
import Quiz from './Components/Quiz/Quiz'


function App() {
  return (
    <GlobalStorage>
      <div className='bg-gray-50 dark:bg-dark transition-colors min-h-screen'>
        <BrowserRouter>
          <HeaderMobile />
          <Header />
          <Routes>
              
              //todas rotas de biografias
              <Route path="biografias/al-khwarizm" element={<AlKhwarizmPage/>}/>

              //rotas da navbar
              <Route path="/" element={<Home />}/>
              <Route path='/biografias' element={<BiografiasPage />}/>
              <Route path="/fundamentos" element={<Fundamentos />}/>
              <Route path="/cronologia" element={<div className="text-white text-3xl p-8">Cronologia</div>} />
              <Route path="/quizes" element={<QuizesPage />} />
              <Route path="/quizes/:id" element={<QuizDetail />} />
              <Route path="/quizes/:id/start" element={<Quiz />} />
              <Route path="/conteudo/:id" element={<Conteudo />} />


              <Route path="*" element={<NaoEncontrada />} />
              <Route path="/desenvolvedores" element={<Desenvolvedores />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </GlobalStorage>
  )
}

export default App