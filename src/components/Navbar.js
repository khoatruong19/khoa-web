import React, { useState } from 'react'
import { Link, NavLink , BrowserRouter as Router} from 'react-router-dom'
import "../styles/Navbar.scss"
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import logo from "../assets/logo-classic.png"
const Navbar = () => {
    const [menuBtn,setMenuBtn] = useState(false)
    return (
        <nav className = "navbar" >
            {menuBtn ? 
                <div className="navbar__tlinks">
                    <NavLink className="navbar__tlinks-item" activeClassName="active" to ="/" exact>Home</NavLink>
                    <NavLink className="navbar__tlinks-item" activeClassName="active" to = "/about" exact>About</NavLink>
                    <NavLink className="navbar__tlinks-item" activeClassName="active" to = "/todo" exact>Todo</NavLink>
                    <NavLink className="navbar__tlinks-item" activeClassName="active" to = "/note" exact>Note</NavLink>
                </div> 
                : 
                <div className ="navbar__logo">
                    <Link className="navbar__link-item" to ="/"> 
                        <h1>KHOA</h1>
                    </Link>
                </div>
            }
            <div className="navbar__links">
                <NavLink className="navbar__link-item" activeClassName="active" to ="/"  exact>Home</NavLink>
                <NavLink className="navbar__link-item" activeClassName="active" to="/about" exact>About</NavLink>
                <NavLink className="navbar__link-item" activeClassName="active" to = "/todo" exact>Todo</NavLink>
                <NavLink className="navbar__link-item" activeClassName="active" to = "/note" exact>Note</NavLink>
            </div>
            <div className="menu-btn" onClick= {() => setMenuBtn((prev) => !prev)}>
                {menuBtn ? <AiOutlineClose className="close-btn"/> : <AiOutlineMenu/> }
             </div>
        </nav>
    )
}

export default Navbar
