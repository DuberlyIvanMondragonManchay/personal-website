import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import {ColorProvider} from './context/ColorContext';

import Home from './pages/Home';
import Footer from './components/Footer';
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <ColorProvider>
      <Navbar/>
      <Routes>
        <Route path='/personal-website' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </ColorProvider>
  )
}

export default App
