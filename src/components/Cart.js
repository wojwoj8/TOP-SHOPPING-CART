import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiMinusBox } from '@mdi/js';
import { mdiPlusBox } from '@mdi/js';

const Cart = ({cart, decrement, increment, totalPrice, checkout}) =>{
    const fullPrice = totalPrice();
    return(
        
        
        <div className="cart">
           <div className="cart-items">

            
            {cart.map((item) =>(
                <div className="cart-item" key={item.id}>
                    
            
                <Link to={`/shop/${item.id}`}>

                    <div className="cart-img">
                        <img src={item.image} alt={item.name}></img>
                    </div>

                </Link>

                <div className="cart-bottom">

                    <h2>
                            {item.name}
                    </h2>
                <div className="cart-price-quan-cont">
                    
                    <div className="cart-price">
                        
                        <p>${item.price}.00</p>
                    </div>
                    
                    <div className="cart-quantity">
                        <Icon path={mdiMinusBox} size={1} onClick={(e) => decrement(item)} />
                            <span>{item.quantity}</span>
                        <Icon path={mdiPlusBox} size={1}  onClick={(e) => increment(item)} />
                    </div>
                </div>
                </div>
                
                </div>
            ))}
        </div>
            <div className="cart-total">
                {fullPrice !==0 ? 
                    <div className="cart-total-cont">
                
                    <p>
                        Total price: {fullPrice}$
                    </p>
                    <button onClick={e => checkout()}>
                        Checkout
                    </button> 
                </div>
                :
                <h2>Your cart is empty, add something!!</h2>}
            </div>    
        </div>
        
    )
}

export default Cart;