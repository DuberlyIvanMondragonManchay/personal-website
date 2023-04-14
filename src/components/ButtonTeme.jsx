import React,{useContext} from 'react'
import {ColorContext} from '../context/ColorContext';
function ButtonTeme() {
    const {colorContent,teme,setTeme} = useContext(ColorContext)
    const updateTeme = ()=>{
        console.log(teme)
        if (teme=="#ffca2c")setTeme("#1b69dd")
        else setTeme("#ffca2c")
    }
    console.log(teme)
  return (
    <a onClick={()=>updateTeme()} style={{background:teme,color:colorContent}} className='mt-2 mt-md-0 btn'>{teme=="#ffca2c" ? "Use Theme Primary":"Use Theme Warning"}</a>
  )
}
export default ButtonTeme