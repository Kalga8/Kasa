import Banner from "../components/Banner"
import background from "../assets/banners/banner-about.png"
import Collapse from "../components/Collapse"
import collapseData from "../data/collapse.json"

function About(){
    return (
        <div className="aboutBody">
            <Banner 
            background={background}
            />

            <div className="collapseContainer">
                {collapseData.map((collapse) => (
                    <Collapse
                    key={'${collapse.id}'}
                    title={collapse.title}
                    text={collapse.text}
                    />
                )
                )}
            </div>
        </div>
    )
}

export default About