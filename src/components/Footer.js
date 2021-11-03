import React from 'react'
import {BsFacebook,BsInstagram,BsGithub} from "react-icons/bs"
import "../styles/Footer.scss"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__links">
                <BsFacebook className="icon"/> <BsInstagram className="icon"/> <BsGithub className="icon"/>
            </div>
            <div className="footer__content">
                <h2>I'm very excited to be your friend. Contact me!</h2>
            </div>
        </div>
    )
}

export default Footer
