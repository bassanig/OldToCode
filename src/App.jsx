import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { GlobalStorage } from './Components/Global/Context/GlobalStorage'


import Header from "./Components/Global/Header/Header"

import i18n from './locales/i18'
import Home from './Components/Home/Home'
import Fundamentos from './Components/Fundamentos/Fundamentos'
import NaoEncontrada from './Components/Global/NaoEncontrada'
import Desenvolvedores from './Components/Home/Desenvolvedores'

import AlKhwarizmPage from './Components/Biografia/AlKhwarizmPage'
import JamesWattPage from './Components/Biografia/JamesWattPage' 
import MarieCuriePage from './Components/Biografia/MarieCuriePage'
import JohannesGutenbergPage from './Components/Biografia/JohannesGutenbergPage'
import TalesDeMiletoPage from './Components/Biografia/TalesDeMiletoPage'
import BiografiasHubPage from './Components/Biografia/BiografiasHubPage'
import BiografiaPage from './Components/Biografia/BiografiaPage'

import HeaderMobile from './Components/Global/Header/HeaderMobile'
import Conteudo from './Components/Global/Conteudo'
import Footer from './Components/Global/Footer'
import QuizesPage from './Components/Quiz/QuizesPage'
import QuizDetail from './Components/Quiz/QuizDetail'
import Quiz from './Components/Quiz/Quiz'
import CronologiaPage from './Components/Cronologia/CronologiaPage'
import ScrollToTop from './Components/Global/ScrollToTop'
import SearchPage from "./Components/Search/SearchPage"
import FloatingAccessibilityButton from './Components/Global/FloatingAccessibilityButton'
 
function App() {
  return (
    <GlobalStorage>
      <div className='bg-gray-50 dark:bg-dark overflow-hidden transition-colors min-h-screen'>
        <BrowserRouter basename="/OldToCode">
          <ScrollToTop />
          <HeaderMobile />
          <Header />
          <Routes>
            {/* Rotas Específicas: James Watt, Al-Khwarizm e outras que usam componentes dedicados */}
            <Route path="biografias/al-khwarizm" element={<AlKhwarizmPage/>}/>
            <Route path="biografias/james_watt" element={<JamesWattPage/>}/> 
            <Route path="biografias/marie" element={<MarieCuriePage/>}/>
            <Route path="biografias/gutenberg" element={<JohannesGutenbergPage/>}/>
            <Route path="biografias/tales" element={<TalesDeMiletoPage/>}/>
            
            {/* Rota do Hub e Rota Genérica para outras biografias */}
            <Route path='/biografias' element={<BiografiasHubPage />}/>
            <Route path='/biografias/:id' element={<BiografiaPage />}/>

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


          <FloatingAccessibilityButton />
        </BrowserRouter>
      </div>
    </GlobalStorage>
  )
}


export default App