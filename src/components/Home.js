import { Link } from "react-router-dom";
const Home = () =>{

    return (

        <div className="home">
            <h2>
                Welcome to my Supplements store!💪💪💪
            </h2>
            <Link to='/shop'>
                <button>
                    Go Shopping
               </button>    
            </Link>
        </div>
    )
}

export default Home;