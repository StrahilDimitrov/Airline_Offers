import React from "react";
// Import destination picture
import moscow from '../../assets/moscow.jpg';
import dubai from '../../assets/dubai.jpg';
import abuDhabi from '../../assets/abuDhabi.jpg';
import paris from '../../assets/paris.jpg';

// Import user pics
import user1 from '../../assets/user(1).jpg';
import user2 from '../../assets/user(2).jpg';
import user3 from '../../assets/user(3).jpg';
import user4 from '../../assets/user(4).jpg';

const travelers = [
    {
        id: 1,
        destinationImg: moscow,
        travelerImg: user1,
        travelerName: 'AmirMuhammad',
        socialLink: '@amirmuhammad12'
    },
    {
        id: 2,
        destinationImg: dubai,
        travelerImg: user2,
        travelerName: 'Sasha Mehmedova',
        socialLink: '@sasha_21'
    },
    {
        id: 3,
        destinationImg: abuDhabi,
        travelerImg: user3,
        travelerName: 'Anastasia Goranova',
        socialLink: '@goranova002'
    },
    {
        id: 4,
        destinationImg: paris,
        travelerImg: user4,
        travelerName: 'Alexsander Ivanov',
        socialLink: '@sasho_bg'
    }
]
const Travelers = () => {
    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2>Top travelers of this month!</h2>

                <div className="travelersContainer grid">
                    {
                        travelers.map(({
                                           id,
                                           destinationImg,
                                           travelerImg,
                                           travelerName,
                                           socialLink
                                       }) => {
                            return (
                                <div key={id} className="singleTravelers">
                                    <img src={destinationImg} className="destinationImg"/>
                                    <div className="travelersDetails">
                                        <div className="travelersPics">
                                            <img src={travelerImg} className="travelerImg"/>
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Travelers;