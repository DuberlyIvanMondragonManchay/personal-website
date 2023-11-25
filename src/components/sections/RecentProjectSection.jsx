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
import '../../App.css';

function RecentProjectSection() {
    const {colorContent} = useContext(ColorContext)
    return (
        <div id='miproyects'>
            <Container className='text-center mb-5'>
                <h3 className='text-success'><span style={{color:colorContent}} >Proyectos</span> Recientes <IconProject/></h3>
                <p style={{color:colorContent}} className='p-4'>Explora nuestros proyectos recientes, fusionando tecnologías para soluciones innovadoras. Simplifica tareas, mejora la productividad <br className='d-none d-md-flex'/> y brinda experiencias excepcionales. Encuentra la solución perfecta para tus necesidades tecnológicas.</p>
                
                <div className='d-flex flex-wrap justify-content-center'>
                    <CardMyProjects 
                        title="Portfolio" 
                        text="Portafolio personal creado con React, Node.js y Bootstrap. Incluye la opción de cambiar temas y alternar entre modos oscuro y claro para una experiencia personalizada."
                        img={portfolio}
                        link="#"
                        />

                    <CardMyProjects 
                        title="DIMM" 
                        text="DIMM es un sistema para casinos en el cual todo el personal que trabaja dentro tiene su perfil creado por el jefe, permitiendo así el registro de su asistencia. Además, el sistema cuenta con roles. También permite al administrador ver, a través de gráficos, cuántos clientes llegan a la semana.Su estructura se basa en un enfoque robusto y tecnológico, utilizando Vite para el desarrollo del front-end, MongoDB como base de datos y Nodejs para el back-end. Aún esta en desarrollo."
                        img={dimm}
                        linkExternal="https://dimm-store.netlify.app/login"
                        // linkGihub="https://github.com/Duberly2004/crud-php-mysql"
                        />

                    <CardMyProjects 
                        title="Emmit" 
                        text="La página web tiene como objetivo informar sobre EMIT. Fue desarrollada en la International Space Apps Challenge, un hackathon utilizando datos abiertos de la NASA."
                        img={emmit}
                        linkExternal="https://adrian-coronel.github.io/spaceapp-emit"
                        // linkGihub="https://github.com/Duberly2004/plataforma-educativa"
                        /> 
                    <CardMyProjects 
                        title="Calculadora anime" 
                        text="Calculadora anime que nos permite realizar operaciones matemáticas básicas relacionadas con el mundo del anime. Ideal para fans que desean calcular de manera rápida y sencilla en un ambiente temático."
                        img={calculadora_anime}
                        linkExternal="https://calculadoraanimedimm.000webhostapp.com/"
                        // linkGithub="#" 
                    />
                    <CardMyProjects 
                        title="Mkadir" 
                            text="MKadir es un innovador sistema de menús en línea que permite visualizar los menús actualizados de diversos restaurantes. Cualquier persona puede registrarse en la plataforma y, una vez dentro, tener la posibilidad de registrar su propio restaurante para cargar y compartir su menú antes de la visita. Además, MKadir ofrece un sistema de registro de empleados con roles diferenciados, facilitando así la gestión de personal para los propietarios de restaurantes."
                        img={mkadir}
                        linkExternal="https://mkadir.netlify.app/"
                        // linkGithub="#" 
                    />
                </div> 
             </Container>
        </div>
    )
}

export default RecentProjectSection