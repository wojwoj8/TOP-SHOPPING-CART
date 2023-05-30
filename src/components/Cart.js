const Cart = ({cart, decrement, increment, totalPrice}) =>{
    const fullPrice = totalPrice();
    return(
        
        
        <div className="cart">
           <div className="cart-items">

            
            {cart.map((item) =>(
                <div className="cart-item" key={item.id}>
                    <h2>
                        {item.name}
                    </h2>
            
                <div className="cart-img">
                    <img src={item.image} alt={item.name}></img>
                </div>
            
                <div className="cart-price">
                    <p>Price: {item.price}$</p>
                </div>
                
                <div className="cart-quantity">
                    <button onClick={(e) => decrement(item)}>-</button>
                    {item.quantity}
                    <button onClick={(e) => increment(item)}>+</button>
                </div>
                
                
                </div>
            ))}
        </div>
            <div className="cart-total">
                {fullPrice !==0 ? <p>Total price: {fullPrice}$</p> :
                <h2>Your cart is empty, add something!!</h2>}
            </div>    
        </div>
        
    )
}

export default Cart;