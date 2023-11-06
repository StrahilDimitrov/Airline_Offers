import React from "react";
import video from '../../assets/sky.mp4';
import pics from '../../assets/aiplanePicture.png';

const Home = () => {
    return(
        <div className="home flex container">
            <div className="mainText">
                <h1>Experience your unforgettable trip</h1>
            </div>
            <div className="homeImages flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop className="video"></video>
                </div>

                <img src={pics} className="plane" />
            </div>
        </div>
    )
}

export default Home;