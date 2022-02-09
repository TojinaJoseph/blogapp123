import React from 'react'
import Mainheader from '../mainheader/Mainheader';
import toj from './toj.jpeg'
import './About.css'

const About = () => {
    return (
        <div>
            <Mainheader/>
            <h1>About Me</h1>
            <div className="aboutme">
            <img className="toj" src={toj}></img>
            <h3>TOJINA JOSEPH</h3>
             <h4>Fullstack developer</h4>
            </div>
           
        </div>
    )
}

export default About
