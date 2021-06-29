import React, {useState} from 'react'
import logo from '../Images/logo.png'
import './Topbars.scss'
const Topbars = () => {
    const [menuOpen,setMenuOpen] = useState(false);


    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
            <ul className={"menu " + (menuOpen && "active")} >
                <li>Header</li>
                <li>Feature</li>
                <li>Offer</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Topbars
