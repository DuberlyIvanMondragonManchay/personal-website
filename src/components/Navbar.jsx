import React,{useState,useContext} from 'react';
import {ColorContext} from '../context/ColorContext'
import {Container,Navbar,Nav} from 'react-bootstrap';
import logoDark from '../img/logo-dark.svg';
import logoLight from '../img/logo-light.svg';

import MenuHamburguesaLight from '../img/menu-hamburguesa-light.svg';
import MenuHamburguesaDark from '../img/menu-hamburguesa-dark.svg';
import '../styles/Navbar.css';

// React icons
import {FaHome} from 'react-icons/fa';
import {IoIosContact} from 'react-icons/io';
import {AiOutlineFundProjectionScreen as IconProject}  from 'react-icons/ai';
import {GiSkills} from 'react-icons/gi';
import {MdMiscellaneousServices} from 'react-icons/md';
import ButtonMode from './ButtonMode';
import ButtonTeme from './ButtonTeme';


function NavbarComponent() {
    const {color,colorContent,teme} = useContext(ColorContext)
    const [expandedd,setExpanded] = useState(false);
    const handleClick = () =>setExpanded(!expandedd);

    // Navbar Components

    const LinkComponent = (props)=>{
        return (
            <Nav.Link 
                style={{color:colorContent}} 
                onMouseOver={(e) => e.target.style.color = teme} 
                onMouseLeave={(e) => e.target.style.color = colorContent}  
                onClick={handleClick} 
                href={props.href}>
                <props.Icon size={25} color={teme} />&nbsp; {props.title}
            </Nav.Link>
        )
    }

  return (
    <>
    <Navbar expanded={expandedd} onToggle={handleClick}  style={{width:'100%',background:color,color:colorContent}} expand='xl' >
        <Container fluid className='px-3'>

            <Navbar.Brand href='#home'><img  src={color == "black" ? logoLight:logoDark} alt="Duberly logoDark"/></Navbar.Brand>
            <Navbar.Brand style={{color:colorContent}}>Duberly</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar'><img style={{width:30}} src={color=="black" ? MenuHamburguesaLight : MenuHamburguesaDark}/></Navbar.Toggle>
            
            <Navbar.Collapse id='navbar'>
            <Nav className='me-auto'></Nav>
                <Nav className='p-3 p-md-0' navbar>

                    {/* OJO ESTE ES UN COMPONENTE PERSONALIZADO , ESTA AL INICIO DE ESTE ARCHIVO */}
                    <LinkComponent style={{color:"red"}} title="Home" Icon={FaHome} href="#home"/>
                    <LinkComponent title="Services" Icon={MdMiscellaneousServices} href="#services"/> 
                    <LinkComponent title="Skill Set" Icon={GiSkills} href="#skill"/>
                    <LinkComponent title="Projects" Icon={IconProject} href="#projects"/>
                    <LinkComponent title="Contact" Icon={IoIosContact} href="#contact"/>
                </Nav>
                <div className='mx-3 d-flex justify-content-start flex-column flex-md-row'>
                    <ButtonMode/>
                    <ButtonTeme/>
                </div>
            </Navbar.Collapse>
                   
        </Container>
    </Navbar>
        {/* caja para separa el menu del contenido  */}
        <Container id='home' style={{width:100,height:100}}/>

    </>
  )
}

export default NavbarComponent