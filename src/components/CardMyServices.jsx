import React ,{useContext} from 'react';
import {ColorContext} from '../context/ColorContext';
import Card from 'react-bootstrap/Card';
function CardMyServices(props) {
    const {color,colorContent} = useContext(ColorContext)
    return (
        <Card className='border-0 m-auto p-3 h-100' style={{maxWidth:300,background:color}}>
            <Card.Img variant='top' src={props.img}/>
            <Card.Body>
                <Card.Title style={{color:colorContent}}><h2>{props.cardTitle1}<br/> <span>{props.cardTitle2}</span></h2></Card.Title>
                <Card.Text  style={{color:colorContent}}>
                    {props.cardText}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardMyServices