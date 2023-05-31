import { Navigate, useParams } from "react-router-dom";

const Item = ({items, addToCart}) =>{

    const {id} = useParams();

    const myItem = items.find((item) => item.id === Number(id))
    if (myItem === undefined){
        // console.log('wrong id')
        return(
            <Navigate to = '/' />
        )
        
    }
    const {name, image, price} = myItem
    // console.log(myItem)
    
    return (

        <div className="item">
            <div className="item-img">
                <img src={image} alt={name}></img>
            </div>
            <div className="item-desc">
                <h2 className="item-name">{name}</h2>
                
                <hr></hr>

                <p className="price">Price: {price}$</p>
                <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus euismod ante, convallis sagittis justo scelerisque nec. Cras nec eros ullamcorper, tempor quam eu, venenatis erat. Vestibulum dignissim tortor nec risus ultricies, nec sodales metus consequat. Fusce sit amet convallis augue. Donec vehicula nisi a sem luctus, non euismod quam venenatis. Praesent id convallis elit. Sed faucibus mi ut vehicula pellentesque. Vestibulum quis ex lectus. In maximus, eros sagittis ultrices cursus, diam mauris euismod nibh, in mollis nulla dolor ullamcorper sapien.</p>

                <div className="item-buttons">
                    <button 
                    onClick={(e) => addToCart(myItem)}
                    >Add to cart</button>
                    
                </div>
            </div>

            
            
        </div>
    )
}

export default Item;