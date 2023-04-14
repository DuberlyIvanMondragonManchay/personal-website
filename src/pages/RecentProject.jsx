import React,{useContext} from 'react'
import {ColorContext} from '../context/ColorContext'
import {AiOutlineFundProjectionScreen as IconProject}  from 'react-icons/ai';
import CardMyProjects from '../components/CardMyProjects';

function RecentProgect() {
    const {teme,colorContent} = useContext(ColorContext)
    return (
        <div id='miproyects' className='m-4 text-center mb-5'>
            <h1 style={{color:teme}}><span style={{color:colorContent}}>Recent</span> Projects <IconProject/></h1>
            <p style={{color:colorContent}} className='p-4'>Aporto mi pasión por crear <br /> experiencias fáciles de usar e<br /> impulsar tendencias y tecnologías de diseño  <br /> de primer nivel que satisfagan las necesidades <br /> y superen sus expectativas.</p>
            <div className='d-flex flex-wrap justify-content-center'>
                <CardMyProjects/>
                <CardMyProjects/>
                <CardMyProjects/>
                <CardMyProjects/>
                <CardMyProjects/>
             </div> 
        </div>
    )
}

export default RecentProgect