import { Link } from "react-router-dom"
import logo from "../assets/logo/logo-pink.png"

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} />
            </div>

            <div className= "navbar" >
                <nav>
                <Link to="/" > Accueil </Link>
                <Link to = "/A-propos" > A propos </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header