import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';


const Navbar = ({counter}) =>{


    return(
        <div className="navbar">
            
                <ul>
                    <div className="nav-links">
                        <Link to="/">
                            <li>Home</li> 
                        </Link>

                        <Link to="/shop">
                            <li>Shop</li>
                        </Link>
                    </div>
                    <div className="nav-cart">

                    
                        <Link to="/cart">
                            <li className="last-li"><Icon className="cart-icon" path={mdiCart} size={1} /> {counter}</li>
                        </Link>
                    </div>
                </ul>
            
        </div>
    )
}

export default Navbar;