import React from "react"
import "./HeroimgStyles.css";
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const Heroimg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg"></img>
            </div>
            <div className="content">
                <p>HI, I'M A DEVELOPER.</p>
                <h1>Java Developer.</h1>
                <div>
                    <Link to="/Project" className="btn">PROJECTS</Link>
                    <Link to="/Contact" className="btn btn-light">CONTACT</Link>
                </div> 
            </div>
        </div>
    )
}

export default Heroimg;