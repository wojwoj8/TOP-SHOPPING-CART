import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Shop from "./Shop";
import "./App.scss";

import About from './components/About';


const RouteSwitch = () =>{

    return(
        <BrowserRouter>
        {/* this navbar will always display */}
            <Navbar />
            <Routes>
                <Route path="/" element={<App></App>} />
                <Route path="/about" element={<About></About>} />
                <Route path="/cart" element={<Cart></Cart>} />
                <Route path="/shop" element={<Shop></Shop>} />
            </Routes>
        
      </BrowserRouter>
    )
}
export default RouteSwitch;