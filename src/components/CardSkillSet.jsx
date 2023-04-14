import React from 'react';
import Card from 'react-bootstrap/Card'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
export default function CardSkillSet(props) {
    const starts = []
    let cantFill=0
    let cantOutoline=0
    if (props.starts>5)props.starts<0?cantFill=0:cantFill=5
    else cantFill=props.starts
    
    if (cantFill<=5) cantFill<0?cantOutoline=5:cantOutoline=5-cantFill
    else cantOutoline=5 


    for (let i=1;i<=cantFill;i++){
        let key=10
        starts.push(<AiFillStar key={i+key}/>)
    }
    
    for (let i=1;i<=cantOutoline;i++){
        let key=100
        starts.push(<AiOutlineStar key={i+key}/>)
    }
    return (
        <Card className='border-0 text-center text-white' style={{ background:"none",width: '10rem' }}>
        <Card.Img className='m-auto' style={{maxWidth:80}} variant="top" src={props.img} />
        <Card.Body>
            <Card.Title>{props.text}</Card.Title>
            <Card.Text style={{color:"#ffc73d"}}>
            {starts}
            </Card.Text>
        </Card.Body>
        </Card>
  )
}