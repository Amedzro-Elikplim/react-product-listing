import React from "react";
import { withRouter } from "react-router";

function CartCard(props) {

   
    return (

        <div className="container">
           <div className="card cart-card">
              <div className="card-body">
                 <div className="row">
                     <div className="col-5 card-col">
                         <img src={props.image} className="img-thumbnail cart-image"/>
                         <span id="card-item-name"></span>
                     </div>
                     <div className="col-1 card-col">
                         <small>Size</small>
                         <h4>23</h4>
                     </div>
                     <div className="col-3 card-col">
                         <small>Price</small>
                         <h4>GHC 400.00</h4>
                         
                     </div>
                     <div className="col-3">
                        <small>Total Price (plus shipping)</small>
                        <h4>GHC 430.00</h4>

                        <a className="link-on-cart1" href="#">remove product</a> <a className="link-on-cart2" href="#">edit order</a>
                     </div>
                 </div>
              </div>
           </div>
        </div>
    )

}

export default withRouter(CartCard);