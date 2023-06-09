import React,{useContext} from 'react'
import {ColorContext} from '../context/ColorContext'
import {GiSkills} from 'react-icons/gi';
import CardSkillSet from '../components/CardSkillSet';
import html from '../img/skillsets/html.svg'
import css from '../img/skillsets/css.svg'
import js from '../img/skillsets/js.svg'
import python from '../img/skillsets/python.svg'
import boostrap from '../img/skillsets/bootstrap.svg'
import react from '../img/skillsets/react.svg'
import mysql from '../img/skillsets/mysql.svg'
import php from '../img/skillsets/php.svg'

export default function SkillSet() {
    const {colorContent} = useContext(ColorContext)
    return (
        <div id="skill">
            <h3 className='text-center text-success'><span style={{ color:colorContent }}>Tecnologias</span> Usadas <GiSkills/></h3>
            <div className='mt-5 d-flex flex-wrap justify-content-center'>
                <CardSkillSet text="HTML" img={html} starts={5}/>
                <CardSkillSet text="CSS" img={css} starts={5}/>
                <CardSkillSet text="JS" img={js} starts={5}/>
                <CardSkillSet text="Pyhon" img={python} starts={4}/>
                <CardSkillSet text="Boostrap" img={boostrap} starts={4}/>
                <CardSkillSet text="React" img={react} starts={5}/>
                <CardSkillSet text="Mysql" img={mysql} starts={5}/>
                <CardSkillSet text="PHP" img={php} starts={4}/>
            </div>
        </div>
    )
}