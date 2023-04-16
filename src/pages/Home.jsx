import React,{useContext} from 'react'
import {Container,Col} from 'react-bootstrap'
import logoduGrandPrimary from '../img/logodu-grand-primary.svg';
import logoduGrandWarning from '../img/logodu-grand-warning.svg';
import  '../styles/Home.css'
import {ColorContext} from '../context/ColorContext'
function Home() {
  const {teme,color,colorContent} = useContext(ColorContext)
  
  // --------------COLOR DEL BODY:--------------------------------------
  document.getElementById('body').style.backgroundColor=color;
  // -------------------------------------------------------------------

  return (
    <Container id="home" style={{color:colorContent}} className='d-flex mt-5'>
    <Col className='text-center text-md-start  pt-4 p-3'>
      <p className='text-center text-md-start'>Hello, <span style={{color:teme}}>I'm</span></p>
      {/* text-duberly-ivan : clase personalizada */}
        <h1 style={{color:teme}} className='text-center text-md-start'><span className='maquinaescribir'>Duberly Ivan . <span style={{background:color,borderLeftColor:teme}} className='after-du'></span></span></h1>
      <p className='text-center text-md-start'><span></span> Desarrollador Web <br className='d-md-none' /> & <br className='d-md-none'/> Programador Fullstack </p>
      <p className='text-center text-md-start pt-3'>Estoy comprometido a encontrar <br />
      soluciones innovadoras y <br />
      experimentar continuamente para  <br />
      ayudar a mis clientes a alcanzar sus  <br />
      objetivos. </p>
    </Col>
    {/* logo-du-grand : clase personalizada */}
    <Col className='d-none d-md-block logo-du-grand m-auto text-center'>
    <img className='logo-du-grand' src={teme == "#ffca2c" ? logoduGrandWarning : logoduGrandPrimary} alt="" />
  </Col>
</Container>
  )
}

export default Home