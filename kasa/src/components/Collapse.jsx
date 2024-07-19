import { useState } from "react";

import ArrowBackUp from "../assets/arrows/arrow-back_down.png";

function Collapse ({title, text}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleArrow = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="collapsesContainer">
                <div className="collapseTitle" onClick={toggleArrow}> {title}
                    <img
                    src= {ArrowBackUp}
                    alt="Arrow"
                    className= {isOpen ? "arrowBackUp" : "arrowBackDown" }
                    />
                </div>
                <div className={isOpen ? "collapseTextOpen" : "collapseText"}>
                    {text}</div>
        </div>
    )
}

export default Collapse