import { useState } from "react";

import ArrowBackDown from "../assets/arrows/arrow-back_down.png";
import ArrowBackUp from "../assets/arrows/arrow-back_up.png";

function Collapse ({title, text}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleArrow = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="collapesContainer">
                <div className="collapseTitle" onClick={toggleArrow}> {title}
                    <img
                    src={isOpen ? ArrowBackDown : ArrowBackUp}
                    alt="Arrow"
                    className="arrowBack"
                    />
                </div>
                <div className="collapseText">{text}</div>
        </div>
    )
}

export default Collapse