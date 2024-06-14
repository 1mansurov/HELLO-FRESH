import HellofreshItem from "../helloFreshItem/HellofreshItem";
import "./HelloFresh.css";



function HelloFresh({data}) {
    console.log(data);
    return (
        <div className="hello_fresh__wrapper">
            <section className="hello__fresh">
                {
                    data.map(item =>{
                       return <HellofreshItem img={item.img} title={item.title} info={item.info}/>
                    })
                }
            </section>
        </div>
    )
}

export default HelloFresh;
