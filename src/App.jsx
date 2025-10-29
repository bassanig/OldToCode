import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { GlobalStorage } from './Components/Global/Context/GlobalStorage'


import Header from "./Components/Global/Header/Header"

import i18n from './locales/i18'
import Home from './Components/Home/Home'
import Fundamentos from './Components/Fundamentos/Fundamentos'
import NaoEncontrada from './Components/Global/NaoEncontrada'
import Desenvolvedores from './Components/Home/Desenvolvedores'

import BiografiasHubPage from './Components/Biografia/BiografiasHubPage'

import HeaderMobile from './Components/Global/Header/HeaderMobile'
import Conteudo from './Components/Global/Conteudo'
import Footer from './Components/Global/Footer'
import QuizesPage from './Components/Quiz/QuizesPage'
import QuizDetail from './Components/Quiz/QuizDetail'
import Quiz from './Components/Quiz/Quiz'
import CronologiaPage from './Components/Cronologia/CronologiaPage'
import ScrollToTop from './Components/Global/ScrollToTop'
import SearchPage from "./Components/Search/SearchPage"
import ScrollToTopButton from './Components/Global/ScrollToTopButton'
 
function App() {
  return (
    <GlobalStorage>
      <div className='bg-gray-50 dark:bg-dark  transition-colors min-h-screen'>
        <BrowserRouter basename="/OldToCode">
          <ScrollToTop />
          <HeaderMobile />
          <Header />
          <Routes>
            {/* Rota do Hub e Rota Genérica para outras biografias */}
            <Route path='/biografias' element={<BiografiasHubPage />}/>
            <Route path='/conteudo/:id' element={<Conteudo />}/>

            {/* rotas da navbar */}
            <Route path="/" element={<Home />}/>
            <Route path="/fundamentos" element={<Fundamentos />}/>
            <Route path="/cronologia" element={<Navigate to="/cronologia/pre-historia" />} />
            <Route path="/cronologia/:id" element={<CronologiaPage />} />
            <Route path="/quizes" element={<QuizesPage />} />
            <Route path="/quizes/:id" element={<QuizDetail />} />
            <Route path="/quizes/:id/start" element={<Quiz />} />
            <Route path="/conteudo/:id" element={<Conteudo />} />

            {/* ROTA DE BUSCA */}
            <Route path="/search" element={<SearchPage />} />

            {/* Rota de desenvolvedores e não encontrada */}
            <Route path="/desenvolvedores" element={<Desenvolvedores />} />
            <Route path="*" element={<NaoEncontrada />}/>
          </Routes>
          <Footer />


          <ScrollToTopButton />
        </BrowserRouter>
      </div>
    </GlobalStorage>
  )
}


export default App