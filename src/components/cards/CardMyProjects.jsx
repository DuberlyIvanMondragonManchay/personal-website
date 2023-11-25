import React, { useContext } from 'react'
import {Card,Row,Col,Container} from 'react-bootstrap';
import { ColorContext } from '../../context/ColorContext';
import {BsGithub} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
// CSS
import '../../styles/CardMyProject.css';
function CardMyProjects(props) {
  const {colorContent} = useContext(ColorContext);
  return (
    <Card id='card_project' className='p-1 m-2 rounded-top' style={{width: '18rem', height:"430px",color:colorContent}}>
      
      <Card.Img style={{ background:"#00000000" }} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title style={{fontSize:"25px"}}>{props.title}</Card.Title>
        <Container className='overflow-auto' style={{height:"85px"}}>

          <Card.Text style={{fontSize:"13px"}} className=' text-start'>
            {props.text}
          </Card.Text>
        </Container>

          <Col className='mb-1 mt-1 text-end'><a href={props.linkExternal} target='_blank'><BiLinkExternal style={{cursor:"pointer"}} size={25} color='#fe5e43'/></a> </Col>

        <Row>
          <Col className='col-5 d-flex justify-content-between'>
            <BsGithub size={25}/>
            <a href={props.linkGihub} target='_blank'  style={{backgroundColor:"#2f2c7a",cursor:'pointer',fontSize:"13px"}} className='rounded text-white p-1 text-decoration-none'>Github</a>
          </Col>
          
          <Col className='col-7 d-flex justify-content-end'>
            <a style={{backgroundColor:"#363535",fontSize:"13px"}} className='rounded text-white p-1 px-2 w-20 text-decoration-none'>{props.date}</a>
          </Col>

        </Row>
        
      </Card.Body>
    </Card>
  )
}

export default CardMyProjects