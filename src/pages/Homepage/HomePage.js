import "./HomePage.scss"
import Carousel from 'better-react-carousel'
import { Link } from 'react-router-dom'
import heroHome from "../../assets/images/hero-home.png"
import forMentor from "../../assets/images/for-mentor.png"
import forMentee from "../../assets/images/for-mentee.png"
import board from "../../assets/images/board.png"
import desk from "../../assets/images/desk.png"
import homecard1 from "../../assets/images/homecard01.jpg"
import homecard2 from "../../assets/images/homecard02.jpg"
import left from "../../assets/images/left.svg"
import right from "../../assets/images/right.svg"

function HomePage({setIsLoggedIn}) {

    function handleClick () {
        setIsLoggedIn(false)
    }

    const customleft = () => {
        return (
            <img display="inline" height="20px" src={left} />
        )
    }

    const customright = () => {
        return (
            <img display="inline" height="20px" src={right} />
        )
    }

    return (
        <>
            <section className="section section--home-hero">
                <div className="body-wrap">
                    <section className="hero">
                        <div className="hero__left">
                            <h1 className="hero__text">Connect indigenous college students with experienced mentors</h1>
                            <div className="hero__botton-container">
                                <Link to="/signup">
                                    <button onClick={handleClick} className="button button--hero">
                                        Join Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="hero__right">
                            <img src={heroHome} alt="" className="hero__card" />
                        </div>
                    </section>
                </div>
            </section>
            <section className="section section--home-intro">
                <div className="body-wrap">
                    <div className="home-intro">
                        <h2 className="home-intro__header">
                            Book and meet over 14,386+ mentors<br></br>
                            for 1:1 mentorship in your indigenous community.
                        </h2>
                        <div className="home-intro__top">
                            <div className="home-intro__top__left">
                                <img className="home-intro__image" src={board} alt="" />
                            </div>
                            <div className="home-intro__top__right">
                                <Link to="/explore" >
                                    <img className="home-intro__text" src={forMentee} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="home-intro__bottom">
                            <div className="home-intro__bottom__left">
                                <Link to="/about" >
                                    <img className="home-intro__text" src={forMentor} alt="" />
                                </Link>
                            </div>
                            <div className="home-intro__bottom__right">
                                <img className="home-intro__image" src={desk} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--home-testimonial">
                <div className="body-wrap">
                    <div className="testimonials">
                        <h2 className="testimonials__header">
                            Testimonial Stories
                        </h2>
                        <div className="testimonials__container">
                            <img className="testimonials__card" src={homecard1} />
                            <img className="testimonials__card" src={homecard2} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage