import React from "react";
import {IoIosAirplane} from "react-icons/io";
import {BsPhoneVibrateFill} from "react-icons/bs";
import {GrLanguage} from "react-icons/gr";
import {TiThMenuOutline} from "react-icons/ti";
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className="navbar flex">
            <div className="navBarOne flex">
                <div>
                    <IoIosAirplane className="icon"/>
                </div>
                <div className="none flex">
                    <li className="flex"><BsPhoneVibrateFill/>Support</li>
                    <li className="flex"><GrLanguage/>Languages</li>
                </div>
                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>
            <div className="navbarTwo flex">
                <div className="logoDiv">
                    <img src={logo} alt="logo" className="logo"/>
                </div>
                <div className="navbarMenu">
                    <ul className="menu flex">
                        <li className="listItem">Home</li>
                        <li className="listItem">Offers</li>
                        <li className="listItem">Destination</li>
                        <li className="listItem">About Us</li>
                    </ul>
                    <button className="btn flex btnOne">
                        Contact
                    </button>

                    <button className="btn flex btnTwo">
                        Contact
                    </button>

                    <div className="toggleIcon">
                        <TiThMenuOutline className="iconS"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;