import React,{useContext} from 'react'
import linkedin from '../img/linkedin.svg'
import {Row,Col, Container} from 'react-bootstrap'
import {ColorContext} from '../context/ColorContext'
export default function Footer() {
    const {teme,color} = useContext(ColorContext)
    return (
        <Container style={{background:color,with:"100%"}} className='mt-5 mb-4'>
            <Row style={{color:teme}} className='d-flex justify-content-between flex-column flex-md-row  text-center text-md-start'>
                <Col>
                    <p>Desarrollador web y programador Duberly Mondragòn ©2023</p>
                </Col>
                <Col className='d-flex justify-content-center justify-content-md-end'>
                    <p className='mx-3'>Echa un vistazo a mi</p>
                    <a href="https://www.linkedin.com/in/duberly-ivan-mondragon-manchay-a44999255/" target={'_blank'}><img style={{maxWidth:35}} src={linkedin} alt="img linkedin" /></a>
                </Col>
            </Row>
        </Container>
    )
}
