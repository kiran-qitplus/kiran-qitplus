import { faAngular, faCss3, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import dotnetLogo from '../../assets/img/netcore.svg'
import Loader from "react-loaders";
const About=(()=>{
    const afterHover=function(){
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000);
    };
    const [letterClass,setLetterClass]=useState('text-animate');
    useEffect(()=>{
        afterHover();
    },[]);

    return(
        <>
        <div className="container about-page">
            <div className="text-zone">
            <h1>
            <AnimatedLetters strArray={['A','b','o','u','t',' ','M','e']} letterClass={letterClass} idx="12" />
            </h1>
          
                <p>I am very ambitious full stack developer with extensive knowledge about backend technologies and front end in web developement looking for opportunities to work with
                the latest technologies on challenging and diverse project.</p>
                <p>I am quielty confident,naturally curious and perpetually working on imporving my skillset with motivation to complete one problem at a time.</p>
                <p>I am described as honest, tech-obsessed by my collegues beacause anything related technology is my passion. </p>
                
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
                    </div>
                    <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#DD0031" />
                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faReact} color="#DD0031" />
                    </div>
                    <div className="face6">
                    <img src={dotnetLogo} alt=".Net" id="netlogo" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
});

export default About;