const Cart = ({cart}) =>{

    return(
        
        
        <div className="cart">

        {cart.map((item) =>(
            <div className="cart-item" key={item.id}>
                <p>
                    {item.name}
                    <br></br>
                    {item.price}
                    <br></br>
                    {item.quantity}
                </p>
                <img src={item.image} alt={item.name}></img>
            </div>
        ))}

        </div>
    )
}

export default Cart;