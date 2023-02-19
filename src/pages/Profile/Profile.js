import "./Profile.scss"
import profileTop from "../../assets/images/profile-top.png"
import profileBottom from "../../assets/images/profile-bottom.png"
function Profile () {

    return (
        <>
        <section className="section section--profile-top">
            <div className="body-wrap">
                <div className="profile-top">
                    <img className="profile-top__placeholder" src={profileTop} alt="" />

                </div>
            </div>
        </section>
        <section className="section section--profile-bottom">
            <div className="body-wrap">
                <div className="profile-bottom">
                    <img className="profile-bottom__placeholder" src={profileBottom} alt="" />

                </div>
            </div>
        </section>
        </>
    )
}

export default Profile