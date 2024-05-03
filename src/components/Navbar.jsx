import React,{useState,useContext} from 'react';
import {ColorContext} from '../context/ColorContext'
import {Container,Navbar,Nav} from 'react-bootstrap';
import logoWhite from '../img/logo-white.svg';
import logoDark from '../img/logo-dark.svg';
import MenuHamburguesaLight from '../img/menu-hamburguesa-light.svg';
import MenuHamburguesaDark from '../img/menu-hamburguesa-dark.svg';
import '../styles/Navbar.css';

// React icons
import {FaHome} from 'react-icons/fa';
import {IoIosContact} from 'react-icons/io';
import {AiOutlineFundProjectionScreen as IconProject}  from 'react-icons/ai';
import {GiSkills} from 'react-icons/gi';
import {MdMiscellaneousServices} from 'react-icons/md';
import ButtonMode from './buttons/ButtonMode';


function NavbarComponent() {
    const {colorDark,colorContent,mode} = useContext(ColorContext)
    const [expandedd,setExpanded] = useState(false);
    const handleClick = () =>setExpanded(!expandedd);

    // Navbar Components

    const LinkComponent = (props)=>{
        return (
            <Nav.Link 
                style={{color:colorContent}} 
                onMouseOver={(e) => e.target.style.color = "#218838"} 
                onMouseLeave={(e) => e.target.style.color = colorContent}  
                onClick={handleClick}
                href={`#${props.href}`}
                >
                <props.Icon size={25} color={"#218838"} />&nbsp; {props.title}
            </Nav.Link>
        )
    }

  return (
    <div>
    <Navbar expanded={expandedd} onToggle={handleClick}  style={{width:'100%',background:mode}} expand='xl' >
        <Container>

            <Navbar.Brand className='mt-3' href='/'><img style={{ height:'50px' }} src={mode==colorDark? logoWhite:logoDark} alt="Duberly logoDark"/></Navbar.Brand>
            <Navbar.Brand style={{color:colorContent}}></Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar'><img style={{width:30}} src={mode==colorDark ? MenuHamburguesaLight : MenuHamburguesaDark}/></Navbar.Toggle>
            
            <Navbar.Collapse id='navbar'>
            <Nav className='me-auto'></Nav>
                <Nav className='p-3 p-md-0' navbar>

                    {/* THIS IS A PERSONALITY COMPONENT  , ESTA AL INICIO DE ESTE ARCHIVO */}
                    <LinkComponent title="Home" Icon={FaHome} href="home"/>
                    <LinkComponent title="Services" Icon={MdMiscellaneousServices} href="services"/> 
                    <LinkComponent title="Skill Set" Icon={GiSkills} href="skill"/>
                    <LinkComponent title="Projects" Icon={IconProject} href="miproyects"/>
                    <LinkComponent title="Contact" Icon={IoIosContact} href="contact"/>
                </Nav>
                <div className='d-flex justify-content-start flex-column flex-md-row'>
                    <ButtonMode/>
                </div>
            </Navbar.Collapse>
                   
        </Container>
    </Navbar>
        {/* caja para separa el menu del contenido  */}
        <Container id='home' style={{width:'100%',height:100}}/>

    </div>
  )
}

export default NavbarComponent