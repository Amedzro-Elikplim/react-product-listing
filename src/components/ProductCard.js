import React from "react";
import { withRouter } from "react-router";



function ProductCards(props) {
     let data = {
         name: props.name,
         image: props.image,
         price: props.price
     }

     function doSomething(props) {
        props.history.push("/details")
        localStorage.setItem("info", JSON.stringify(data));
     }
     

    return (
        <div className="card product-card" onClick={() => doSomething(props)}>
            <img src={props.image} className="product-image"/>
            <div className="card-body">
                <p id="t1">{props.name}</p>
                <h6 id="t2">{props.price}</h6>
            </div>
        </div>
    )
}

export default withRouter(ProductCards);