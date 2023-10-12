import React,{useContext} from 'react'
import {ColorContext} from '../../context/ColorContext'
import {GiSkills} from 'react-icons/gi';
import CardSkillSet from '../cards/CardSkillSet';
import tailwindcss from '../../img/skillsets/tailwindcss.svg'
import django from '../../img/skillsets/django.svg'
import nodejs from '../../img/skillsets/nodejs.svg'
import git from '../../img/skillsets/git.svg'
import aws from '../../img/skillsets/aws.svg'
import vite from '../../img/skillsets/vite.svg'
import mysql from '../../img/skillsets/mysql.svg'
import mongodb from '../../img/skillsets/mongodb.svg'

export default function SkillSet() {
    const {colorContent} = useContext(ColorContext)
    return (
        <div id="skill">
            <h3 className='text-center text-success'><span style={{ color:colorContent }}>Tecnologias</span> Usadas <GiSkills/></h3>
            <div className='mt-5 d-flex flex-wrap justify-content-center'>
                <CardSkillSet text="TailwindCss" img={tailwindcss} starts={5}/>
                <CardSkillSet text="Django" img={django} starts={5}/>
                <CardSkillSet text="NodeJs" img={nodejs} starts={5}/>
                <CardSkillSet text="AWS" img={aws} starts={4}/>
                <CardSkillSet text="Git" img={git} starts={5}/>
                <CardSkillSet text="Vite" img={vite} starts={5}/>
                <CardSkillSet text="Mysql" img={mysql} starts={5}/>
                <CardSkillSet text="MongoDb" img={mongodb} starts={5}/>
            </div>
        </div>
    )
}