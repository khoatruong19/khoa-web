import React from 'react'
import "../styles/Home.scss"
import s400 from "../assets/s400.png"
import { NavLink } from 'react-router-dom'
const Home = () => {
    return (
        <div className ="homepage">
            <div className="homepage__leftside">
                    <h1>Welcome to my page</h1>
                    <p>Let see what i have</p>

                    <button className="homepage__leftside-btn">
                       <NavLink to="/about" activeClassName="active" >Get more information</NavLink> 
                    </button>
            </div>
            <div className="homepage__rightside">
                <img src={s400} className = "thumbnail" alt="" />
            </div>
        </div>
    )
}

export default Home
