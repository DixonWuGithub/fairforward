
import "./About.scss"
import aboutLogo from "../../assets/images/about-hero.png"

function About() {

    return (
        <>
            <section className="section section--about-intro">
                <div className="body-wrap">
                    <div className="about-intro">
                        <img className="about-intro__logo" src={aboutLogo} alt="" />
                        <div className="about-intro__text">
                            FairForward is a platform that aims to connect indigenous youth with experienced mentors who share their cultural background, in order to address the challenges they face in planning their future careers while staying connected to their roots.
                        </div>

                    </div>
                </div>
            </section>
            <section className="section section--about-hero"></section>

        </>
    )
}

export default About