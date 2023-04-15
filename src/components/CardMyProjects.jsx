import React from 'react'
import {Card,Row,Col,Container} from 'react-bootstrap';
// import portfolio from '../img/projects/portfolio.svg'
import portfolio from '../img/projects/portfolio.svg'
import {BsGithub} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
function CardMyProjects(props) {
  return (
    <Card className='p-1 m-2 rounded-top' style={{background:"#171717",width: '15rem', height:"380px",color:"#ffff"}}>
      
      <Card.Img className='bg-white' variant="top" src={props.img} />
      <Card.Body>
        <Card.Title style={{fontSize:"25px"}}>{props.title}</Card.Title>
        <Container className='overflow-auto' style={{height:"85px"}}>

          <Card.Text style={{fontSize:"13px"}} className=' text-start'>
            {props.text}
          </Card.Text>
        </Container>

          <Col className='mb-1 mt-1 text-end'><a href={props.linkExternal} target='_blank'><BiLinkExternal style={{cursor:"pointer"}} size={25} color='#fe5e43'/></a> </Col>

        <Row>
          <Col className='d-flex justify-content-between'>
            <BsGithub size={25}/>
            <a href={props.linkGihub} target='_blank'  style={{backgroundColor:"#2f2c7a",cursor:'pointer',fontSize:"13px"}} className='rounded text-white p-1 px-1  text-decoration-none'>Github</a>
          </Col>
          
          <Col className='d-flex justify-content-end'>
            <a style={{backgroundColor:"#363535",fontSize:"13px"}} className='rounded text-white p-1 px-2 w-20 text-decoration-none'>4/14/2023</a>
          </Col>

        </Row>
        
      </Card.Body>
    </Card>
  )
}

export default CardMyProjects