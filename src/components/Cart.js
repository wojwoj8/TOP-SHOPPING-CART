const Cart = ({cart, decrement, increment}) =>{

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

        </div>
    )
}

export default Cart;