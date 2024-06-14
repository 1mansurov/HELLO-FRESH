import "./Nav.css";
import navlogo from './images/navlogo.svg'
import strlka from './images/strelka.svg'


function Nav() {
    return (
        <nav>
            <div className="nav__wrapper">
                <a href=""><img src={navlogo} alt="" /></a>
                <h4>Our Plans</h4>
                <h4>How It Works</h4>
                <h4>Our Menus <a href=""><img src={strlka} alt="" /></a></h4>
                <h4>Gift Cards</h4>
                <h4>Sustainability <a href=""> <img src={strlka} alt="" /> </a></h4>
                <h4>Thanksgiving Box</h4>
            </div>
            <button>Log in</button>
        </nav>
    )
}

export default Nav;