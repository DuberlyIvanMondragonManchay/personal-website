import React,{useContext} from 'react'
import {ColorContext} from '../context/ColorContext'
// REACT BOOSTRAP
import '../App.css';
import {Row,Col,Container} from 'react-bootstrap';
import CardMyServicess from '../components/CardMyServices';
// ILUSTRATIONS PRIMARY
import imgWebDeveloperPrimary from '../img/web-developer-primary.svg';
import imgWebProgrammerPrimary from '../img/web-programmer-primary.svg';
import imgFullStackProgrammerPrimary from '../img/full-stack-programmer-primary.svg';
// ILUSTRATIONS WARNING
import imgWebDeveloperWarning from '../img/web-developer-warning.svg';
import imgWebProgrammerWarning from '../img/web-programmer-warning.svg';
import imgFullStackProgrammerWarning from '../img/full-stack-programmer-warning.svg';

import {MdMiscellaneousServices} from 'react-icons/md';
function MyServices() {
    const {teme,colorContent} = useContext(ColorContext)
    return (
        <Container id='services' className='mt-5 mb-5 h-100 text-center'>
        <h5 style={{color:colorContent}}>My Services </h5>
        <h1 style={{color:teme}}>What I Do <MdMiscellaneousServices/></h1>
        <Row  xs={1} md={3} className='g-4 pt-3'>
            <Col>
                <CardMyServicess 
                img={teme=="#ffca2c" ? imgWebDeveloperWarning:imgWebDeveloperPrimary}
                cardTitle1='Desarrollador'
                cardTitle2='Web'
                cardText='Crea tus páginas web responsivas para tu negocio.'/>
            </Col>

            <Col >
                <CardMyServicess
                    img={teme=="#ffca2c" ? imgWebProgrammerWarning:imgWebProgrammerPrimary} 
                    cardTitle1={`Programador`}
                    cardTitle2={`Web`}
                    cardText={'Ofrecer sitios web intuitivos y centrados en el usuario que hagan realidad la visión de mis clientes al combinar la experiencia técnica'}
                    />
            </Col>

            <Col>
                <CardMyServicess
                    img={teme=="#ffca2c"? imgFullStackProgrammerWarning: imgFullStackProgrammerPrimary} 
                    cardTitle1={'Programsdor'}
                    cardTitle2={'Fullstack'}
                    cardText={'Pasión por crear experiencias fáciles de usar y un impulso para mantenerse al día con las tendencias y tecnologías web.'}
                />
            </Col>
                
        </Row>
        </Container>
    )
}

export default MyServices
