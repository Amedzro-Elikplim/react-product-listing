import React from 'react';
import {detailButtonSizes} from "../Data"

function DetailsPage(props) {
    
    let data = JSON.parse(localStorage.getItem("info"));

    const navigate = (props) => {
      props.history.push("/cart")
    }
 

    return(
        <div className="container">
             <div className="row">
               <div className="col-6">
                 <img src={data.image} className="img-thumbnail" />
               </div>

               <div className="col-6">
                   <div>
                       <h1>{data.name}</h1>
                       <i className="fa fa-star star"></i>
                       <i className="fa fa-star star"></i>
                       <i className="fa fa-star star"></i>
                       <i className="fa fa-star star"></i>
                       <i className="fa fa-star star"></i>
                   </div>

                   <p>No Reviews  <a href="#">Write your reviews here</a> </p>
                   <p> <span>FREE GROUND SHIPPING</span> on all orders over $125</p>
                   <h4>{data.price}</h4>
                   <p>Color: Valvet Red Stripe</p>
                   <i className="fa fa-circle circle "></i>
                   <i className="fa fa-circle circle "></i>

                  <div>
                   {detailButtonSizes.map((s, i) => {
                     return (
                       <button className="btn btn-light detail-button" key={i}>{s.size}</button>
                     )
                   })}
                  </div>
                  <small id="stock">In stock</small>
                  <h1>Add counter here</h1>

                  <button className="cart-button" onClick={() => navigate(props)}>Add to bag</button>
                  <button className="payment-button">
                     Buy online, free in-store pick up<br/> <small>Get it today, at a store near you</small>
                  </button>
                   
               </div>
             </div>
        </div>
    )
}

export default DetailsPage;
     

 