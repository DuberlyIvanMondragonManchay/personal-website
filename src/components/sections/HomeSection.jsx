import React,{useContext} from 'react'
import {Container,Col} from 'react-bootstrap'
import '../../App.css';

import {ColorContext} from '../../context/ColorContext'
import Title from '../Title'
function HomeSection() {
  const {colorContent} = useContext(ColorContext)

  return (
    <div id="home" style={{color:colorContent}} className='mt-md-5 mt-0'>
      <Container className='d-flex '>

      <Col className='text-center text-md-start pt-4 p-3'>
        {/* text-duberly-ivan : clase personalizada */}
          {/* <h1 style={{color:teme}} className='text-center text-md-start'><span className='maquinaescribir'>Duberlymondragon.com  . <span style={{background:color,borderLeftColor:teme}} className='after-du'></span></span></h1> */}
          <Title color="success" text="Duberlymondragon.com"/>
        <a href='https://github.com/duberly2004' target='_blank' className='text-center text-md-start text-success'>https://github.com/duberly2004</a>
        <p className='text-center text-md-start pt-3'>
        ¡Bienvenido a <span className='text-success'>Duberlymondragon.com</span>! El sitio web en el <br className='d-none d-md-block' />
        que encontrarás proyectos prácticos y atractivos usando <br className='d-none d-md-block' />
        diferentes tecnologías. Si has <br className='d-none d-md-block'/>
        visitado este sitio anteriormente y está diferente, es <br className='d-none d-md-block'/>
        porque lo estoy mejorando para ti.
        </p>
      </Col>
      </Container>
    </div>
  )
}
export default HomeSection