import "./SignUpMentee.scss"
import { Link } from "react-router-dom"
import logob from "../../assets/images/logo-b.png"
import googlesign from "../../assets/images/googlesign.png"


function SignUpMentee({ setIsLoggedIn }) {

    function handleClick(e) {
        setIsLoggedIn(true)
    }
    return (
        <>
            <section className="section section--signup">
                <div className="body-wrap body-wrap--signup">
                    <div className="signup">
                        <img src={logob} alt="" className="signup__logo" />
                        <h2 className="signup__header">
                            Sign up for Mentee
                        </h2>
                        <form  className="signup__form">
                            <input type="text" className="signup__input" placeholder="Your Full Name" />
                            <input type="email" className="signup__input" placeholder="Your Email Address"/>
                            <input type="password" className="signup__input" placeholder="Your Password"/>
                            <Link to="/explore">
                            <button onClick={handleClick} className="createaccount">Create Account</button>
                            </Link>
                        </form>
                        <div className="signup__google">
                            <img src={googlesign} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUpMentee