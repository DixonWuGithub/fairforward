import "./SignUp.scss"
import { Link } from 'react-router-dom'
import logob from "../../assets/images/logo-b.png"
import menteePic from "../../assets/images/board-sign.png"
import mentorPic from "../../assets/images/desk-sign.png"
import menteeSub from "../../assets/images/sign-mentee-sub.png"
import mentorSub from "../../assets/images/sign-mentor-sub.png"
import signin from "../../assets/images/login.png"

function SignUp( {setIsLoggedIn} ) {

    function handleClick(){
        setIsLoggedIn(true)
    }

    return (
        <>
            <section className="section section--signup">
                <div className="body-wrap body-wrap--signup">
                    <div className="signup">
                        <img src={logob} alt="" className="signup__logo" />
                        <h2 className="signup__header">
                            Welcome to FairForward
                        </h2>
                        <div className="signup__container">
                            <Link to="../signup/mentee"><div className="signup__mentee">
                                <img src={menteePic} alt="" />
                                <img src={menteeSub} alt="" />
                            </div>
                            </Link>
                            <Link to="../signup/mentee"><div className="signup__mentor">
                                <img src={mentorPic} alt="" />
                                <img src={mentorSub} alt="" />
                            </div>
                            </Link>
                        </div>
                        <div className="signup__signin">
                            <Link onClick={handleClick} to="/profile"><img src={signin} alt="" /></Link>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default SignUp