import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home';
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Shop from "./Shop";
import Card from './components/Card';
import "./App.scss";
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

  // for checking if item in cart array, includes works on reference 
  // and since I changed item to new object have to check it this way
  const findItem = (item) =>{
    const arrItem = cart.find((id) => item.id === id.id);

    if (arrItem !== undefined){
      console.log(`item is in cart:`)
      return arrItem;
    }
    
  }
  const addToCart = (item) =>{

    // method to get deep copy of object (deep copy can make copy of object with objects in it
    // while shallow copy {...item} can copy only object without objects in it)
    const newItem = structuredClone(item);
    const found = findItem(newItem);
    if (found){

      const arrItem  = found;
      
      console.log('is in array')
      arrItem.quantity += 1;
      setCart([...cart])
    }
    else{
      setCart([...cart, newItem]);
    }
    setCounter(counter + 1)
    console.log(cart)

  }
  const increment = (item) =>{
    item.quantity += 1;
    setCounter(counter + 1)
  }

  const decrement = (item) =>{
    // console.log(item)
    if (item.quantity > 1){
      // console.log('test')
      item.quantity -= 1;
      setCounter(counter - 1)
    }
    else if (item.quantity === 1){
      // assign to variable new cart without item, then set cart to new array
      const updatedCart = cart.filter(it => it.id !== item.id);
      setCounter(counter - 1);
      setCart(updatedCart);
      
    }
    
  }

  const totalPrice = () =>{
    let price = 0;
    for(let i = 0; i < cart.length; i++){
      price += cart[i].quantity * cart[i].price;
    }
    return price;
  }


  const checkout = () =>{
    alert('Thanks for purchase!!!')
    setCart([]);
    setCounter(0);
  }

  return(
    <BrowserRouter>
    {/* this navbar will always display */}
        <Navbar
        counter={counter} />
        <div className="App">
        <Routes>
          
          
              <Route path="/" element={<Home></Home>} />

              <Route path="/cart" element={<Cart
              cart={cart}
              increment={increment}
              decrement={decrement}
              totalPrice={totalPrice}
              checkout={checkout}

              ></Cart>} />

              <Route path="/shop" element={<Shop

                addToCart={addToCart}
                items={items}

              ></Shop>} />

              <Route path="/shop/:id" element={<Item
              items={items}
              addToCart={addToCart}
              
              ></Item>} />

              {/* if path doesn't exist route to '/' */}
              <Route path='*' element={<Navigate to ='/'/>} />
            
        </Routes>
        </div>
    </BrowserRouter>
)
    
}

export default App;
