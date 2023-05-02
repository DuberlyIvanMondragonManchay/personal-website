import React,{useContext} from 'react'
import {ColorContext} from '../context/ColorContext'
import {AiOutlineFundProjectionScreen as IconProject}  from 'react-icons/ai';
import CardMyProjects from '../components/CardMyProjects';
import crudPhpMysql from '../img/projects/crud-php-mysql.svg';
import portfolio from '../img/projects/portfolio.svg';
import eduReg from '../img/projects/edureg.svg';

function RecentProgect() {
    const {teme,colorContent} = useContext(ColorContext)
    return (
        <div id='miproyects' className='m-4 text-center mb-5'>
            <h1 style={{color:teme}}><span style={{color:colorContent}}>Recent</span> Projects <IconProject/></h1>
            <p style={{color:colorContent}} className='p-4'>Aporto mi pasión por crear <br /> experiencias fáciles de usar e<br /> impulsar tendencias y tecnologías de diseño  <br /> de primer nivel que satisfagan las necesidades <br /> y superen sus expectativas.</p>
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
                    linkExternal="http://crud-php-mysql.lovestoblog.com/"
                    linkGihub="https://github.com/Duberly2004/crud-php-mysql"
                    />

                <CardMyProjects 
                    title="EduReg" 
                    text="En este sitio podrás registrar y administrar información sobre nuestros estudiantes, cursos y matrículas. Podrás agregar, modificar o eliminar datos, y asegurarte de que toda la información esté actualizada y disponible para nuestros usuarios."
                    img={eduReg}
                    linkExternal="http://plataforma-educativa.epizy.com/"
                    linkGihub="https://github.com/Duberly2004/plataforma-educativa"
                    />
                
             </div> 
        </div>
    )
}

export default RecentProgect