import Card from "./components/Card";
const Shop = ({items, addToCart}) =>{
 

    return (
        <div className="cards">
            {items.map((item) => (
                <Card
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                quantity={item.quantity}
                addToCart={addToCart}
                ></Card>
               
            ))}
        </div>
        
    )
}

export default Shop;