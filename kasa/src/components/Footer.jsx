import logoWhite from "../assets/logo/logo-white.png"

function Footer () {
    return (
        <footer>
            <div className="logo-white">
                <img src={logoWhite} alt="Logo de Kasa blanc"/>
            </div>

            <div className="allRights">
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer