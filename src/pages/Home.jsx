import React,{useContext} from 'react'
import {Container,Col} from 'react-bootstrap'
import '../App.css';

import {ColorContext} from '../context/ColorContext'
import Title from '../components/Title'
function Home() {
  const {mode,colorContent} = useContext(ColorContext)
  
  // --------------COLOR DEL BODY:--------------------------------------
  document.getElementById('body').style.backgroundColor=mode;
  // -------------------------------------------------------------------

  return (
    <div id="home" style={{color:colorContent}} className='mt-5'>
      <Container className='d-flex '>

      <Col className='text-center text-md-start  pt-4 p-3'>
        {/* text-duberly-ivan : clase personalizada */}
          {/* <h1 style={{color:teme}} className='text-center text-md-start'><span className='maquinaescribir'>Duberlymondragon.com  . <span style={{background:color,borderLeftColor:teme}} className='after-du'></span></span></h1> */}
          <Title color="success" text="Duberlymondragon.com"/>
        <p className='text-center text-md-start text-success'> http://github.com/duberly2004</p>
        <p className='text-center text-md-start pt-3'>
        ¡Bienvenido a Duberlymondragon.com! El sitio web en el<br />
        que encontrarás proyectos prácticos y atractivos usando<br />
        diferentes tecnologias. diferentes tecnologías. Si has <br />
        visitado este sitio anteriormente y está diferente, es <br />
        porque lo estoy mejorando para ti.
        </p>
      </Col>
      </Container>
    </div>
  )
}
export default Home