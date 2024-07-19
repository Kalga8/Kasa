import {useState} from "react"

function Collapse ({title, text}) {
    const [active, setActive] = useState(false)
    const handleToggle = e => {
        setActive(!active)
    }

    return(
        <div className={'collapse ${active && "active"}'}>
                <div className="collapseTitle" onClick={handleToggle}>{title}
                    <span className="arrowBackDown"></span>
                </div>
                <div className="collapseText">{text}</div>
            </div>
    )
}

export default Collapse