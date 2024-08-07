import React,{useContext} from 'react';
import { Container } from 'react-bootstrap';
import {ColorContext} from '../../context/ColorContext'
import {AiOutlineFundProjectionScreen as IconProject}  from 'react-icons/ai';
import CardMyProjects from '../cards/CardMyProjects';
import dimm from '../../img/projects/dimm.svg';
import portfolio from '../../img/projects/portfolio.svg';
import emmit from '../../img/projects/emmit.svg';
import calculadora_anime from '../../img/projects/calculadora_anime.svg';
import mkadir from '../../img/projects/mkadir.svg';
import crm from '../../img/projects/crm.svg';
import inventory from '../../img/projects/inventory.svg';
import '../../App.css';
const projects = [
    {
        title:"Inventory Games",
        text:"Inventario dedicado al área de videojuegos, desarrollado utilizando React con TypeScript para el frontend, y TypeScript junto con MongoDB para la base de datos en el backend. Este sistema permite gestionar el inventario, las categorías, los productos y las ventas de manera eficiente.",
        img:inventory,
        linkExternal:"https://inventory-frontend-ktsx.onrender.com",
        date:"09/05/2024",
        linkGithub:"https://github.com/Duberly2004/inventory_frontend" 
    },
    {
        title:"CRM",
        text:"CRM para la empresa Consigue ventas Online , usando las tecnologías de React con TypeScript en el frontend y en el backend Python con Django. Podemos gestionar el inventario, los usuarios, los clientes y las ventas.",
        img:crm,
        linkExternal:"#",
        date:"08/14/2023",
        linkGithub:"#" 
    },
    {
        title:"Mkadir",
        text:"MKadir es un innovador sistema de menús en línea que permite visualizar los menús actualizados de diversos restaurantes. Cualquier persona puede registrarse en la plataforma y, una vez dentro, tener la posibilidad de registrar su propio restaurante para cargar y compartir su menú antes de la visita. Además, MKadir ofrece un sistema de registro de empleados con roles diferenciados, facilitando así la gestión de personal para los propietarios de restaurantes.",
        img:mkadir,
        linkExternal:"https://mkadir.netlify.app/",
        date:"11/24/2023",
        linkGithub:"https://github.com/Duberly2004/mkadir-client" 
    },
    {
        title:"DIMM",
        text:"DIMM es un sistema para casinos en el cual todo el personal que trabaja dentro tiene su perfil creado por el jefe, permitiendo así el registro de su asistencia. Además, el sistema cuenta con roles. También permite al administrador ver, a través de gráficos, cuántos clientes llegan a la semana.Su estructura se basa en un enfoque robusto y tecnológico, utilizando Vite para el desarrollo del front-end, MongoDB como base de datos y Nodejs para el back-end. Aún esta en desarrollo.",
        img:dimm,
        linkExternal:"https://dimm-store.netlify.app/login",
        date:"08/04/2023",
        linkGihub:"#"
    },
    {
        title:"Emmit",
        text:"La página web tiene como objetivo informar sobre EMIT. Fue desarrollada en la International Space Apps Challenge, un hackathon utilizando datos abiertos de la NASA.",
        img:emmit,
        linkExternal:"https://adrian-coronel.github.io/spaceapp-emit",
        date:"10/08/2023",
        linkGihub:"#"
    },
    {
        title:"Portfolio",
        text:"Portafolio personal creado con React, Node.js y Bootstrap. Incluye la opción de cambiar temas y alternar entre modos oscuro y claro para una experiencia personalizada.",
        img:portfolio,
        link:"#",
        date:"02/05/2023"
    },
    {
        title:"Calculadora anime" ,
        text:"Calculadora anime que nos permite realizar operaciones matemáticas básicas relacionadas con el mundo del anime. Ideal para fans que desean calcular de manera rápida y sencilla en un ambiente temático.",
        img:calculadora_anime,
        linkExternal:"https://calculadoraanimedimm.000webhostapp.com/",
        date:"05/13/2022",
        linkGihub:"https://github.com/Duberly2004/Calculadora-anime"
    }


]
function RecentProjectSection() {
    const {colorContent} = useContext(ColorContext)
    return (
        <div id='miproyects'>
            <Container className='text-center mb-5'>
                <h3 className='text-success'><span style={{color:colorContent}} >Proyectos</span> Recientes <IconProject/></h3>
                <p style={{color:colorContent}} className='p-4'>Explora mis proyectos recientes, fusionando tecnologías para soluciones innovadoras.</p>
                
                <div className='d-flex flex-wrap justify-content-center'>
                    {projects.map((project,index)=>(
                        <CardMyProjects key={index} {...project}/>
                    ))}
                </div> 
             </Container>
        </div>
    )
}

export default RecentProjectSection