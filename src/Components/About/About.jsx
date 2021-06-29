import React from 'react'
import './About.scss'
import image from '../Images/about.png'
const About = () => {
    return (
        <div className="about-container">
            <div className="left">
                <img src={image} alt="" />
            </div>
            <div className="right">
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Possimus praesentium natus, officia molestiae quia, nam quos 
                nulla architecto harum temporibus error eum culpa.Laudantium 
                nisi, assumenda quibusdam tenetur odit harum.</p>
                <a href="" className="btn">READ MORE</a>
            </div>
        </div>
    )
}

export default About
