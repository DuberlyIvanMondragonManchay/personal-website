import React from 'react'
import Navbar from './components/Navbar'
import { ColorProvider} from './context/ColorContext';
import Home from './pages/Home';
import MyServices from './pages/MyServices';
import RecentProgect from './pages/RecentProject';
import SkillSet from './pages/SkillSet';
import Footer from './pages/Footer';
import './App.css'

function App() {
  return (
    <ColorProvider>
    <Navbar/>
    <Home/>
    <MyServices/>
    <RecentProgect/>
    <SkillSet/>
    <Footer/>
    </ColorProvider>
  )
}

export default App