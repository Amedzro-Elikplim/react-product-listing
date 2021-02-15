
import CartCard from "./CartCard";


function CartPage() {

    return (
       <div className="container">
           <div className="text-center cart-text">Cart(Total items count: {Object.keys(JSON.parse(localStorage.getItem("items"))).length})</div>
            {Object.values(JSON.parse(localStorage.getItem("items"))).map((s,i) => {
                return(
                    <CartCard key={i}  image={s.image}/> 
                )
            })}

            <div>
                <h4 className="total">Total Cost: GHC 300,000
                    {
                     
                     //add prices in data.js and sum it

                    }
                    </h4>
            </div>
       </div>
    )
}
   
export default CartPage;