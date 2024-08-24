import React from "react";
import Navbar from "../components/Navbars";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
import Heroimg2 from "../components/Heroimg2";

const About = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="ABOUT." text="Im a friendly java developer"/> 
            <AboutContent />
            <Footer />
        </div>
    )
}
export default About;