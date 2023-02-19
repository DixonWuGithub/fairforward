import "./Explore.scss"
import mentorForm from "../../assets/images/mentorForm.png"
import mentor1 from "../../assets/images/Card-2.png"
import mentor2 from "../../assets/images/Card-6.png"
import mentor3 from "../../assets/images/Card-1.png"
import mentor4 from "../../assets/images/Card-7.png"
import mentor5 from "../../assets/images/Card-4.png"
import mentor6 from "../../assets/images/Card-5.png"
import mentor7 from "../../assets/images/Card-3.png"
import mentor8 from "../../assets/images/Card-8.png"
import EducatorCard from "../../components/EducatorCard/EducatorCard"

function Explore({ setMentor }) {

    let popMentorsArray = [
        {
            image: mentor1,
            name: "Patricia Yoo",
            title: "Mental health / Nurse"
        },
        {
            image: mentor2,
            name: "Sophia Wu",
            title: "Career / Math teacher"
        },
        {
            image: mentor3,
            name: "Charlotte Seguin",
            title: "Career / HR"
        },
        {
            image: mentor4,
            name: "Mia Alayyad",
            title: "Financial / CEO"
        }

    ]

    let topMentorsArray = [
        {
            image: mentor5,
            name: "Adriel",
            title: "Career / Senior Copywriter"
        },
        {
            image: mentor6,
            name: "Taline Jivanian",
            title: "Financial / Accountant"
        },
        {
            image: mentor7,
            name: "Joylynn Kirui",
            title: "Career / Developer"
        },
        {
            image: mentor8,
            name: "Navneet Grewal",
            title: "Mental health / Therapist"
        }

    ]

    let popMentor = popMentorsArray.map((mentor) => {
        return (
            <EducatorCard
                setMentor={setMentor}
                name={mentor.name}
                title={mentor.title}
                image={mentor.image}
            />)
    })

    let topMentor = topMentorsArray.map((mentor) => {
        return (<EducatorCard
            setMentor={setMentor}
            name={mentor.name}
            title={mentor.title}
            image={mentor.image}
        />)
    })

    return (
        <>
            <section className="section section--explore">
                <div className="body-wrap">
                    <div className="explore">
                    <form action="" className="mentor">
                        <h2 className="mentor__heading">
                            Find your mentor
                        </h2>
                        <img src={mentorForm} alt="" className="form__fields" />
                    </form>
                    <div className="mentors">
                        <div className="mentors__popular">
                            <div className="mentors__title-container ">
                                <h3 className="mentors__title">
                                    Popular mentors
                                </h3>
                                <h3 className="mentors__viewmore">
                                    View More &gt;
                                </h3>

                            </div>
                            <div className="mentors__list">
                                {popMentor}
                            </div>
                        </div>
                        <div className="mentors__topmatch">
                            <div className="mentors__title-container ">

                            <h3 className="mentors__title">
                                    Popular mentors
                                </h3>
                                <h3 className="mentors__viewmore">
                                    View More &gt;
                                </h3>
                            </div>
                            <div className="mentors__list">
                                {topMentor}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Explore