import React,{useContext} from 'react'
import {ColorContext} from '../context/ColorContext'
// REACT BOOSTRAP
import '../App.css';
import {Row,Col,Container} from 'react-bootstrap';
import CardMyServicess from '../components/CardMyServices';
// ILUSTRATIONS 
import imgDownloadOfProjects from '../img/download-of-projects.svg';
import imgOnlineTests from '../img/online-tests.svg';
import imgImprovementsAndUpdates from '../img/improvements-and-updates.svg';

import {MdMiscellaneousServices} from 'react-icons/md';
function MyServices() {
    const {teme,colorContent} = useContext(ColorContext)
    return (
        <div id='services' >
            <Container className='mt-5 mb-5 h-100 text-center'>
            <h5 style={{color:colorContent}}>Servicios </h5>
            <h3 className='text-success'>de Desarrollo y Descarga <MdMiscellaneousServices/></h3>
            <Row  xs={1} md={3} className='g-4 pt-3'>
                <Col>
                    <CardMyServicess 
                    img={imgDownloadOfProjects}
                    cardTitle1='Descarga de'
                    cardTitle2='proyectos'
                    cardText='Explora y descarga proyectos completos desarrollados con diversas tecnologías.'/>
                </Col>

                <Col >
                    <CardMyServicess
                        img={imgOnlineTests} 
                        cardTitle1={`Pruebas en`}
                        cardTitle2={`línea`}
                        cardText={'Experimenta con versiones interactivas de los proyectos antes de descargarlos'}
                        />
                </Col>

                <Col>
                    <CardMyServicess
                        img={imgImprovementsAndUpdates} 
                        cardTitle1={'Actualizaciones'}
                        cardTitle2={'y mejoras'}
                        cardText={'Mantenemos los proyectos actualizados con nuevas características y mejoras.'}
                    />
                </Col>
                    
            </Row>
            </Container>
        </div>

    )
}

export default MyServices
