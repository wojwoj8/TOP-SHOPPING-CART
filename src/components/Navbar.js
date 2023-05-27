import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';


const Navbar = () =>{


    return(
        <div className="navbar">
            
                <ul>
                    <div className="nav-links">
                        <Link to="/">
                            <li>Home</li> 
                        </Link>

                        <Link to="/about">
                            <li>About</li>
                        </Link>

                        <Link to="/shop">
                            <li>Shop</li>
                        </Link>
                    </div>
                    <div className="nav-cart">

                    
                        <Link to="/cart">
                            <li><Icon path={mdiCart} size={1} /></li>
                        </Link>
                    </div>
                </ul>
            
        </div>
    )
}

export default Navbar;