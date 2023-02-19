import "./Booking.scss"
import bookingPlaceholder from "../../assets/images/booking.png"

function Booking ({mentor}) {
    console.log(mentor)
    return (
        <>
        <section className="section section--booking">
            <div className="body-wrap">
                <div className="booking">
                    <h2 className="booking__title">
                        Book Session with '{mentor}'
                    </h2>
                    <p className="booking__text">
                        Choose Date and Time
                    </p>
                    <img src={bookingPlaceholder} alt="" className="booking__placeholder" />
                </div>
            </div>
        </section>
        </>
    )
}

export default Booking