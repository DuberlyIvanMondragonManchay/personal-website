import React,{useContext} from 'react';
import {ColorContext} from '../context/ColorContext'
import {CiDark} from 'react-icons/ci';
import {MdOutlineLightMode} from 'react-icons/md';

export default function ButtonMode() {
  const {color,setColor,colorContent,setcolorContent} = useContext(ColorContext);
  const updateColors=()=>{
    if (color=="black"){
      setColor("white")
      setcolorContent("black");
    }else{
      setColor("black")
      setcolorContent("white");
    } 
  }
  return (
      <a style={{background:colorContent,color:color}} className='mx-2 btn' onClick={()=>updateColors()}>
        {color=="black" ? <><MdOutlineLightMode className='mx-2' style={{fontSize:"20px"}}/>Light Mode</> : <> <CiDark className='mx-2' style={{fontSize:"20px"}}/> Dark Mode</>}
      </a>
  )
}
