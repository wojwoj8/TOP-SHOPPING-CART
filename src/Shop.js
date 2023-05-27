import Card from "./components/Card";
const Shop = ({items}) =>{
 

    return (
        <div className="cards">
            {items.map((item) => (
                <Card
                name={item.name}
                price={item.price}
                image={item.image}
                ></Card>
               
            ))}
        </div>
        
    )
}

export default Shop;