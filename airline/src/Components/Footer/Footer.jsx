import React from "react";
import logo from '../../assets/logo.png';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsTelegram} from 'react-icons/bs';

const Footer = () => {
    return(
        <div className="footer">

            <div className="sectionContainer container grid">
                <div className="gridOne">
                    <div className="logoDiv">
                        <img src={logo} className='logo' />
                    </div>
                    <p>Experience incredible feelings and overcome your fear of flying!</p>
                    <div className="socialIcon flex">
                        <AiFillFacebook className="icon"/>
                        <AiFillInstagram className="icon"/>
                        <AiFillTwitterCircle className="icon"/>
                        <BsTelegram className="icon"/>
                    </div>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">Flight Status</a>
                    </li>
                    <li>
                        <a href="#">Travel</a>
                    </li>
                    <li>
                        <a href="#">Check-In</a>
                    </li>
                    <li>
                        <a href="#">Manage your booking</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Quick Guide</span>
                    <li>
                        <a href="#">FAQ</a>
                    </li>
                    <li>
                        <a href="#">How to</a>
                    </li>
                    <li>
                        <a href="#">Features</a>
                    </li>
                    <li>
                        <a href="#">Baggage</a>
                    </li>
                    <li>
                        <a href="#">Route Map</a>
                    </li>
                    <li>
                        <a href="#">Our communities</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="#">Chauffuer</a>
                    </li>
                    <li>
                        <a href="#">Our partners</a>
                    </li>
                    <li>
                        <a href="#">Destination</a>
                    </li>
                    <li>
                        <a href="#">Careers</a>
                    </li>
                    <li>
                        <a href="#">Transportation</a>
                    </li>
                    <li>
                        <a href="#">Programme Rules</a>
                    </li>
                </div>
            </div>

            <div className="copyRightDiv flex">
                <p>Developer by <a href="#">IsraTech</a></p>
            </div>
        </div>
    )
}

export default Footer;