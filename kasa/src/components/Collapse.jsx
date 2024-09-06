import { useState } from "react";

import ArrowBackUp from "../assets/arrows/arrow-back_down.png";

function Collapse ({id, title, text}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleArrow = () => {
        setIsOpen(!isOpen);
    }

    if (typeof text === "string") {
		text = <p>{text}</p>;
	} else if (Array.isArray(text)) {
		text = text.map((item, index) => (
			<p key={index}>{item}</p>
		));
	}

    return(
        <div className="collapsesContainer"
        key={id}>
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