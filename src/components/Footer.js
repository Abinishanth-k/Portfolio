import React from "react";
import "./FooterStyles.css";
import {FaHome,FaPhone, FaMailBulk, FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa"; 
 
const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                        <div>
                            <p>Madipakkam</p>
                            <p>Chennai-91</p>
                        </div>
                    </div>
                    <div className="phone">
                    <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    <div>
                            <p>+91 9940131219</p>  
                        </div>
                    </div>
                    <div className="mail">
                    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    <div>
                            <p>abinishanth82@gmail.com</p>  
                        </div>
                    </div>
                </div>

                <div className="right">
                        <h4>About the Company</h4>
                        <p>This is me Abinishanth.</p>
                        <div className="social">
                        <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}} /> 
                        <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} /> 
                        <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} /> 
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;