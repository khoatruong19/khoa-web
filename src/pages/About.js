import React from 'react'
import HCMUT from "../assets/HCMUT.png"
import "../styles/About.scss"
const About = () => {
    return (
        <div className="about">
            <div className="about__info">
                <h1>Hello, guys!</h1>
                <p>My name is Khoa. I'm currently a student of HCM city University of Technology also called HCMUT. I really like 
                    designing and building websites. This is a website coded with React library. Welcome!!
                </p>
            </div>
            <div className="about__image">
                <img src={HCMUT} alt="" />
            </div>
        </div>
    )
}

export default About
