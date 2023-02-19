import "./EducatorCard.scss"
import { Link } from 'react-router-dom'


function EducatorCard({ setMentor, image, name, title }) {
    function handleClick(){
        setMentor(name)
    }

    return (
        <>
            <Link to="/booking">
                <div onClick={handleClick} style={{ backgroundImage: ' url(' + image + ')' }} className="educator__card">
                    <h4 className="educator__name">{name}</h4>
                    <p className="educator__title">{title}</p>
                </div>
            </Link>
        </>
    )
}

export default EducatorCard