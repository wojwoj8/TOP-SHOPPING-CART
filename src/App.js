import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Shop from "./Shop";
import Card from './components/Card';
import "./App.scss";
import About from './components/About';
import Item from "./components/Item";

import bcaa from "./images/bcaa.jpg";
import betaAlanine from "./images/beta-alanine.jpg";
import citrulline from "./images/citrulline.jpg";
import creatine from "./images/creatine.jpg";
import magnesium from "./images/magnesium.jpg";
import omega3 from "./images/omega3.jpg";
import preworkout from "./images/preworkout.jpg";
import vitamineB12 from "./images/vitamineB12.jpg";
import vitamineB6 from "./images/vitamineB6.jpg";
import vitamineD3 from "./images/vitamineD3.jpg";
import wheyProtein from "./images/wheyProtein.jpg";



const App = () => {


  const [items, setItems] = useState([
    { id: 0, name: 'BCAA', image: bcaa, price: 50, quantity: 1 },
    { id: 1, name: 'Beta-Alanine', image: betaAlanine, price: 20, quantity: 1 },
    { id: 2, name: 'Citrulline', image: citrulline, price: 10, quantity: 1 },
    { id: 3, name: 'Creatine', image: creatine, price: 20, quantity: 1 },
    { id: 4, name: 'Magnesium', image: magnesium, price: 25, quantity: 1 },
    { id: 5, name: 'Omega 3', image: omega3, price: 30, quantity: 1 },
    { id: 6, name: 'Pre-workout', image: preworkout, price: 25, quantity: 1 },
    { id: 7, name: 'Vitamine B12', image: vitamineB12, price: 10, quantity: 1 },
    { id: 8, name: 'Vitamine B6', image: vitamineB6, price: 10, quantity: 1 },
    { id: 9, name: 'Vitamine D3', image: vitamineD3, price: 10, quantity: 1 },
    { id: 10, name: 'Whey Protein', image: wheyProtein, price: 20, quantity: 1 },
  ]);

  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);

  const addToCart = (item) =>{

    
    if (cart.includes(item)){
      item.quantity += 1;
    }
    else{
      setCart([...cart, item]);
    }
    console.log(cart)
    setCounter(cart.length + 1);
  }
  
  return(
    <BrowserRouter>
    {/* this navbar will always display */}
        <Navbar
        counter={counter} />
        <div className="App">
        <Routes>
          
          
              <Route path="/" element={<Home></Home>} />

              <Route path="/about" element={<About></About>} />

              <Route path="/cart" element={<Cart
              cart={cart}

              ></Cart>} />

              <Route path="/shop" element={<Shop

                addToCart={addToCart}
                items={items}

              ></Shop>} />

              <Route path="/shop/:id" element={<Item
              items={items}
              addToCart={addToCart}
              
              ></Item>} />
            
        </Routes>
        </div>
    </BrowserRouter>
)
    
}

export default App;
