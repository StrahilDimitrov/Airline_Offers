import React from "react";
import loungePics from '../../assets/lounge.jpg';

const Lounge = () => {
    return(
        <div className="lounge container section">
            <div className="sectionContainer grid">

                <div className="imgDiv">
                    <img src={loungePics}/>
                </div>

                <div className="textDiv">
                    <h2>Unaccompanied Minor Lounge</h2>
                </div>

                <div className="grids grid">
                    <div className="singleGrid">
                        <span className="gridTitle">
                            Help through the airport
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lounge;