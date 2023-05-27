const Card = ({image, name, price}) =>{

    return (

        <div className="card-item" key={name}>
            <img src={image} alt={name}>
            </img>
            <p>
                {price}
            </p>

        </div>
    )
}

export default Card;