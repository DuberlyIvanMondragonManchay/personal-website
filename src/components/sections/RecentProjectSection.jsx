import React,{useContext} from 'react';
import { Container } from 'react-bootstrap';
import {ColorContext} from '../../context/ColorContext'
import {AiOutlineFundProjectionScreen as IconProject}  from 'react-icons/ai';
import CardMyProjects from '../cards/CardMyProjects';
import crudPhpMysql from '../../img/projects/crud-php-mysql.svg';
import portfolio from '../../img/projects/portfolio.svg';
import eduReg from '../../img/projects/edureg.svg';
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
                        text="Portafolio personal  creado usando react, nodejs, boostrap. Posee la opción de cambiar tema y cambiar modo dark a light"
                        img={portfolio}
                        link="#"
                        />

                    <CardMyProjects 
                        title="CRUD PHP" 
                        text="CRUD ( Created, Read, Update, Delete ) de empleados Creado con PHP , Mysql y Boostrap. base de datos en la nube"
                        img={crudPhpMysql}
                        // linkExternal=""
                        linkGihub="https://github.com/Duberly2004/crud-php-mysql"
                        />

                    <CardMyProjects 
                        title="EduReg" 
                        text="En este sitio podrás registrar y administrar información sobre nuestros estudiantes, cursos y matrículas. Podrás agregar, modificar o eliminar datos, y asegurarte de que toda la información esté actualizada y disponible para nuestros usuarios."
                        img={eduReg}
                        // linkExternal="http://plataforma-educativa.epizy.com/"
                        linkGihub="https://github.com/Duberly2004/plataforma-educativa"
                        />
                    
                </div> 
             </Container>
        </div>
    )
}

export default RecentProjectSection