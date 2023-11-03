import React from "react";
import {BsFillCalendarEventFill, BsFillBookmarkCheckFill} from 'react-icons/bs';
import {BiSolidCheckShield} from 'react-icons/bi';

const Info = () => {
    return(
        <div className="info section">
            <div className="infoContainer container">

                <div className="titleDiv flex">
                    <h2>With us you can go to the desired destination all over the world</h2>
                    <button className="btn">
                        View All
                    </button>
                </div>

                <div className="cardsDiv grid">
                    <div className="singleCard grid">
                        <div className="iconDiv flex">
                            <BsFillCalendarEventFill className="icon"/>
                        </div>
                        <span className="cardTitle">Book & Relax</span>
                        <p>You can also call airlines from your phone and book a flight ticket!</p>
                    </div>
                    <div className="singleCard grid">
                        <div className="iconDiv flex colorOne">
                            <BiSolidCheckShield className="icon"/>
                        </div>
                        <span className="cardTitle">Smart Checklist</span>
                        <p>You can also call airlines from your phone and book a flight ticket!</p>
                    </div>
                    <div className="singleCard grid">
                        <div className="iconDiv flex colorTwo">
                            <BsFillBookmarkCheckFill className="icon"/>
                        </div>
                        <span className="cardTitle">Save More</span>
                        <p>You can also call airlines from your phone and book a flight ticket!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;