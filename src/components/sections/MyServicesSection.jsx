import React,{useContext} from 'react'
import {ColorContext} from '../../context/ColorContext'
// REACT BOOSTRAP
import '../../App.css';
import {Row,Col,Container} from 'react-bootstrap';
import CardMyServicess from '../cards/CardMyServices';
// ILUSTRATIONS 
import imgDownloadOfProjects from '../../img/download-of-projects.svg';
import imgOnlineTests from '../../img/online-tests.svg';
import imgImprovementsAndUpdates from '../../img/improvements-and-updates.svg';
import imgAlgoritmes from '../../img/img-algoritmes.svg';

import {MdMiscellaneousServices} from 'react-icons/md';
function MyServicesSection() {
    const {teme,colorContent} = useContext(ColorContext)
    return (
        <div id='services' >
            <Container className='mt-5 mb-5 h-100 text-center'>
            <h5 style={{color:colorContent}}>Servicios </h5>
            <h3 className='text-success'>de Desarrollo y Descarga <MdMiscellaneousServices/></h3>
            <Row  xs={1} md={4} className='g-4 pt-3'>
                <Col>
                    <CardMyServicess 
                    img={imgDownloadOfProjects}
                    cardTitle1='Desarrollo de'
                    cardTitle2='API RESTful'
                    cardText='Diseño y desarrollo de APIs RESTful eficientes y seguras.'/>
                </Col>

                <Col >
                    <CardMyServicess
                        img={imgOnlineTests} 
                        cardTitle1={`Integración de`}
                        cardTitle2={`Sistemas`}
                        cardText={'Integración de servicios y sistemas utilizando arquitecturas de microservicios.'}
                        />
                </Col>

                <Col>
                    <CardMyServicess
                        img={imgAlgoritmes} 
                        cardTitle1={'Gestión de'}
                        cardTitle2={'Bases de Datos'}
                        cardText={'Diseño y optimización de bases de datos SQL y NoSQL.'}
                    />
                </Col>
                <Col>
                    <CardMyServicess
                        img={imgImprovementsAndUpdates} 
                        cardTitle1={'Optimización y'}
                        cardTitle2={'Escalabilidad'}
                        cardText={'Mejoras de rendimiento y escalabilidad para aplicaciones backend existentes.'}
                    />
                </Col>
                    
            </Row>
            </Container>
        </div>

    )
}

export default MyServicesSection
