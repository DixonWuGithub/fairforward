import "./Footer.scss"
import footerLeft from "../../assets/images/footer-left.png"
import footerRight from "../../assets/images/footer-right.png"

function Footer () {

    return (
        <>
        <section className="section section--footer">
            <div className="body-wrap">
                <footer className="footer">
                    <img src={footerLeft} alt="" />
                    <img src={footerRight} />
                </footer>
            </div>
        </section>
        
        </>
    )
}

export default Footer