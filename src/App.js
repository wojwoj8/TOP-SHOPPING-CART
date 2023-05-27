import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Shop from "./Shop";
import Card from './components/Card';
import "./App.scss";
import About from './components/About';

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
    { name: 'BCAA', image: bcaa, price: 50 },
    { name: 'Beta-Alanine', image: betaAlanine, price: 20 },
    { name: 'Citrulline', image: citrulline, price: 10 },
    { name: 'Creatine', image: creatine, price: 20 },
    { name: 'Magnesium', image: magnesium, price: 25 },
    { name: 'Omega 3', image: omega3, price: 30 },
    { name: 'Pre-workout', image: preworkout, price: 25 },
    { name: 'Vitamine B12', image: vitamineB12, price: 10 },
    { name: 'Vitamine B6', image: vitamineB6, price: 10 },
    { name: 'Vitamine D3', image: vitamineD3, price: 10 },
    { name: 'Whey Protein', image: wheyProtein, price: 20 },
  ]);

  const [cart, setCart] = useState([]);

  return(
    <BrowserRouter>
    {/* this navbar will always display */}
        <Navbar />
        <div className="App">
        <Routes>
          
          
              <Route path="/" element={<Home></Home>} />

              <Route path="/about" element={<About></About>} />

              <Route path="/cart" element={<Cart></Cart>} />

              <Route path="/shop" element={<Shop

                items={items}

              ></Shop>} />
            
        </Routes>
        </div>
    </BrowserRouter>
)
    
}

export default App;
