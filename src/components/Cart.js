const Cart = ({cart, decrement, increment, totalPrice}) =>{
    const fullPrice = totalPrice();
    return(
        
        
        <div className="cart">

        {cart.map((item) =>(
            <div className="cart-item" key={item.id}>
                <p>
                    {item.name}
                </p>
                    <br></br>
                    <p>{item.price}</p>
                    
                    <br></br>
                    <div className="cart-quantity">
                        <button onClick={(e) => decrement(item)}>-</button>
                        {item.quantity}
                        <button onClick={(e) => increment(item)}>+</button>
                    </div>
                    
               
                <img src={item.image} alt={item.name}></img>
            </div>
        ))}
        {fullPrice !==0 ? <p>Total price: {totalPrice()}</p> :
        <h2>Your cart is empty, add something!!</h2>}
        
        </div>
    )
}

export default Cart;