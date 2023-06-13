import React,{useContext} from 'react'
import HomeSection from '../components/sections/HomeSection';
import MyServicesSection from '../components/sections/MyServicesSection';
import RecentProjectSection from '../components/sections/RecentProjectSection';
import SkillSetSection from '../components/sections/SkillSetSection';
import { ColorContext } from '../context/ColorContext';

function Home() {
  const {mode} = useContext(ColorContext)
  // --------------COLOR DEL BODY:--------------------------------------
  document.getElementById('body').style.backgroundColor=mode;
  // -------------------------------------------------------------------  

  return (
    <>
        <HomeSection/>
        <MyServicesSection/>
        <RecentProjectSection/>
        <SkillSetSection/>
    </>
  )
}

export default Home