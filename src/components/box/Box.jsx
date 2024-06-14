import "./Box.css";
import box from "../images/box.png"

function Box() {
    return (
        <section className="Box">
            <div className="box__wrapper" >
                <img src={box} alt="" />
                <div className="box__content">
                    <h3>What’s inside each box?</h3>
                    <p>✓ Easy-to-follow recipes with clear nutritional info</p>
                    <p>✓ High-quality ingredients sourced straight from the farm</p>
                    <p>✓ Convenient meal kits that fit perfectly in the fridge</p>
                    <p>✓ A fun cooking experience that makes you feel unstoppable</p>
                    <p><a href="">✓ Innovative packaging designed to reduce waste</a></p>
                    <button className="boxbtn" >View our plans</button>
                </div>
            </div>
        </section>
    )
}

export default Box