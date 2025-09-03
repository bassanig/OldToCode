import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./Components/Global/Header"
import Home from './Components/Home/Home'
import Fundamentos from './Components/Fundamentos/Fundamentos'

function App() {
  return (
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/biografia" element={<div className="text-white text-3xl p-8">Biografia</div>} />
                  <Route path="/fundamentos" element={<Fundamentos />}/>
                  <Route path="/cronologia" element={<div className="text-white text-3xl p-8">Cronologia</div>} />
                  <Route path="/quiz" element={<div className="text-white text-3xl p-8">Quiz</div>} />
              </Routes>
          </BrowserRouter>
  )
}

export default App
