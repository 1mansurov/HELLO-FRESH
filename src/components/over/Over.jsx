import "./Over.css";
import over from "../images/over.png"

function Over(){
    return(
        <section className="over" >
            <h3>Over 30+ fresh recipes every week</h3>
            <div className="over__wrapper">
                <img src={over} alt="" />
                <button className="overbtn" >View our menus</button>
            </div>
        </section>
    )
}




export default Over;
