import React, {useState} from "react";
import {IoIosAirplane} from "react-icons/io";
import {BsPhoneVibrateFill} from "react-icons/bs";
import {GrLanguage} from "react-icons/gr";
import {TiThMenuOutline} from "react-icons/ti";
import logo from '../../assets/logo.png';

const Navbar = () => {

    const[active, setActive] = useState('navBarMenu')
    const showNavBar = () => {
        setActive('navBarMenu showNavBar');
    }

    const removeNavBar = () => {
        setActive('navBarMenu');
    }

    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <IoIosAirplane className="icon"/>
                </div>
                <div className="none flex">
                    <li className="flex"><BsPhoneVibrateFill className="icon"/>Support</li>
                    <li className="flex"><GrLanguage className="icon"/>Support</li>
                </div>
                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>

            <div className="navBarTwo flex">
                <div className="logoDiv">
                    <img src={logo} className="logo"/>
                </div>
                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">Home</li>
                        <li onClick={removeNavBar} className="listItem">Offers</li>
                        <li onClick={removeNavBar} className="listItem">Destination</li>
                        <li onClick={removeNavBar} className="listItem">Seats</li>
                        <li onClick={removeNavBar} className="listItem">About Us</li>
                    </ul>
                    <button onClick={removeNavBar} className="btn flex btnOne">Contact</button>
                </div>
                <button className="btn flex btnTwo">Contact</button>
                <div onClick={showNavBar} className="toggleIcon">
                    <TiThMenuOutline/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;