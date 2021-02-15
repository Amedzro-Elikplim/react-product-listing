import React from 'react';
import {sizes, tags, color, cardDetails} from '../Data';
import ProductCards from "./ProductCard";




function ProductsListPage(props) {
    

        return(
            <div className="container-fluid parent">

                {/**images of products */}
                 <div className="container-fluid child1"> 
                    <div className="row">
                        <div className="col-2">

                        <aside>
                         <h3>sizes</h3>
                         {sizes.map((s, i) => {
                                return(
                                    <button key={i} className=" btn btn-light sizes">{s.size}</button>
                                )
                            })}

                        
                         <div className="div1">
                            <h3>color</h3>
                             {color.map((c, i) => {
                                 return (
                                     <button id="color-button" className= {c.name} key={i}></button>
                                 )
                             })}
                         </div>

                        </aside>
                        </div>
                            <div className="col-10 product-row">
                            {cardDetails.map((d) => {
                                    return ( 
                                        <div>
                                          <ProductCards  key={d.id} name={d.name} image={d.image} price={d.price}/>
                                        </div>
                                    )
                            })}
                            </div>
                            
                       
                    </div> 

                        
                       
                    </div>
            </div>


            
        )
    }

    export default ProductsListPage;


