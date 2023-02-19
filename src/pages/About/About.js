
import "./About.scss"
import aboutLogo from "../../assets/images/about-hero.png"
import aboutGraph from "../../assets/images/about-graph.png"
import missionCard from "../../assets/images/about-card.png"

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
            <section className="section section--motivation">
                <div className="body-wrap">
                    <div className="motivation">
                        <div className="motivation__top">
                            <div className="motivation__left">
                                <img src={aboutGraph} alt="" className="motivation__image" />
                            </div>
                            <div className="motivation__right">
                                <h2 className="motivation__title">
                                    Motivation
                                </h2>
                                <p className="motivation__text">
                                    The left image from Statistics Canada depicts the  employment barriers that were reported by unemployed indigenous youths in 2017. These were not only related to environmental factors such as limited job opportunities or lack of required education, but also stemmed from issues like poverty, discrimination, racism, and stereotypes, which caused low self-esteem among the youth.
                                </p>
                            </div>
                        </div>
                        <h2 className="motivation__supporttitle">
                            How might we support discouraged indigenous youths and practically help them find a job?
                        </h2>
                        <p className="motivation__supporttext">
                            FairForward discovered that having empathetic mentors was highly beneficial in improving mentee outcomes. In order to address the educational and informational disparities faced by indigenous youth, FairForward has made the decision to connect these youth with mentors who share their cultural background as well as their professional experience.
                        </p>

                    </div>
                </div>
            </section>
            <section className="section section--image-banner"></section>
            <section className="section section--mission">
                <div className="body-wrap">
                    <div className="mission">
                        <h2 className="mission__title">
                            Our Mission Statement
                        </h2>
                        <img src={missionCard} alt="" className="mission__card" />
                        <p className="mission__text">
                        Our mission is to provide professional support to the next generation of indigenous youth, helping them navigate their career paths while maintaining their cultural heritage.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About