import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/img/k.svg'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';
const Home=()=>{

    const afterHover=function(){
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },4000);
    };
    const [letterClass,setLetterClass]=useState('text-animate');
    const nameArray=['i','r','a','n'];
    const jobArray=['F','u','l','l',' ','S','t','a','c','k',' ','D','e','v','e','l','o','p','e','r','.'];
    useEffect(()=>{
        afterHover()
    },[]);

    return (
        <>
        <div className="container home-page" >
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                  
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Frontend/Backend</h2>
                <Link to="/contact" className='flat-button'>CONTACT</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
        </>
    )
}
export default Home;