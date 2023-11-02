import React from "react";
import {HiLocationMarker} from 'react-icons/hi';
import {RiAccountPinCircleFill} from 'react-icons/ri';
import {BsFillCalendarEventFill} from 'react-icons/bs';

const Search = () => {
    return (
        <div className="search conrainer section">
            <div className="sectionContainer grid">
                <div className="btns flex">
                    <div className="singleBtn">
                        <span>Economy</span>
                    </div>
                    <div className="singleBtn">
                        <span>Business Class</span>
                    </div>
                    <div className="singleBtn">
                        <span>First Class</span>
                    </div>
                </div>
                <div className="searchInputs flex">
                    {/*Single Input*/}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <HiLocationMarker className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Location</h4>
                            <input type="text" placeholder="Wanted Location"/>
                        </div>
                    </div>

                    {/*Single Input*/}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RiAccountPinCircleFill className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Travel</h4>
                            <input type="text" placeholder="Add guests"/>
                        </div>
                    </div>

                    {/*Single Input*/}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <BsFillCalendarEventFill className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Check In</h4>
                            <input type="text" placeholder="Add date"/>
                        </div>
                    </div>
                    {/*Single Input*/}
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <BsFillCalendarEventFill className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Check Out</h4>
                            <input type="text" placeholder="Add date"/>
                        </div>
                    </div>
                </div>
                <button className="btn btnBlock flex">Search Flight</button>
            </div>
        </div>
    )
}

export default Search;