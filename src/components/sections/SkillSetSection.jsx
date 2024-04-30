import React,{useContext} from 'react'
import {ColorContext} from '../../context/ColorContext'
import {GiSkills} from 'react-icons/gi';
import CardSkillSet from '../cards/CardSkillSet';
import tailwindcss from '../../img/skillsets/tailwindcss.svg'
import django from '../../img/skillsets/django.svg'
import nodejs from '../../img/skillsets/nodejs.svg'
import git from '../../img/skillsets/git.svg'
import aws from '../../img/skillsets/aws.svg'
import react from '../../img/skillsets/react.svg'
import mysql from '../../img/skillsets/mysql.svg'
import mongodb from '../../img/skillsets/mongodb.svg'
import linux from '../../img/skillsets/linux.svg'
import ts from '../../img/skillsets/ts.svg'
import docker from '../../img/skillsets/docker.svg'

export default function SkillSet() {
    const {colorContent} = useContext(ColorContext)
    return (
        <div id="skill">
            <h3 className='text-center text-success'><span style={{ color:colorContent }}>Tecnologias</span> Usadas <GiSkills/></h3>
            <div className='mt-5 d-flex flex-wrap justify-content-center'>
                <CardSkillSet text="Docker" img={docker} starts={5}/>
                <CardSkillSet text="TypeScript" img={ts} starts={5}/>
                <CardSkillSet text="AWS" img={aws} starts={5}/>
                <CardSkillSet text="Mysql" img={mysql} starts={5}/>
                <CardSkillSet text="MongoDb" img={mongodb} starts={5}/>
                <CardSkillSet text="Git" img={git} starts={5}/>
                <CardSkillSet text="NodeJs" img={nodejs} starts={5}/>
                <CardSkillSet text="Linux" img={linux} starts={5}/>
                <CardSkillSet text="TailwindCss" img={tailwindcss} starts={5}/>
                <CardSkillSet text="Django" img={django} starts={5}/>
                <CardSkillSet text="react" img={react} starts={5}/>
            </div>
        </div>
    )
}