import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
const Contact=()=>{
    const afterHover=()=>{
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000);
    }
    const [letterClass,setLetterClass]=useState('text-animate');
    useEffect(()=>{
       afterHover()
    },[]);
    return(<>
    
        <div className="container contact-page">
            <h1>
                <AnimatedLetters strArray={['E','m','a','i','l']} letterClass={`${letterClass} _14`} idx='14' />
                
            </h1>
            <div className="mail-content">
            <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:mailtokiransth@gmail.com"> mailtokiransth@gmail.com</a>
            </div>
        </div>
    </>)
}
export default Contact;