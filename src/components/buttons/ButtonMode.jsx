import React,{useContext} from 'react';
import {ColorContext} from '../../context/ColorContext'
import {CiDark} from 'react-icons/ci';
import {MdOutlineLightMode} from 'react-icons/md';

export default function ButtonMode() {
  const {colorDark,colorLight,mode,setMode,colorContent,setcolorContent} = useContext(ColorContext);

  const updateColors=()=>{
    // COLOR MODE LOCAL STORAGE
    if (localStorage.getItem('colorMode') === colorLight) {
      localStorage.setItem('colorMode', colorDark);
      localStorage.setItem('colorContent',colorLight);
    } else {
      localStorage.setItem('colorContent',colorDark); 
      localStorage.setItem('colorMode', colorLight);
    }

    if (mode==colorDark){
      setMode(colorLight)
      setcolorContent(colorDark);
    }else{
      setMode(colorDark)
      setcolorContent(colorLight);
    } 
  }
  return (
      <a style={{color:colorContent}} className='mx-2 btn rounded-0' onClick={()=>updateColors()}>
        {mode==colorDark ? <><MdOutlineLightMode className='mx-2' style={{fontSize:"20px"}}/>Light Mode</> : <> <CiDark className='mx-2' style={{fontSize:"20px"}}/> Dark Mode</>}
      </a>
  )
}
