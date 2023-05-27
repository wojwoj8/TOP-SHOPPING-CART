import { Link } from "react-router-dom";
const Card = ({image, name, price, id, quantity}) =>{

    return (

        <Link to={`/shop/${id}`}
        
        >
        
            <div className="card-item" key={id}>
                <img src={image} alt={name}>
                </img>
                <div className="card-item-desc">
                    <p className="card-name">
                        {name}
                    </p>

                    <p className="card-price">
                    Price: {price}$
                    </p>
                    
                    
                </div>

            </div>
        </Link>
    )
}

export default Card;