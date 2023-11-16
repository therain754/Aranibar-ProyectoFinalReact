import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import React from "react";
import {ShopContext, ShopContextProvider} from "./context/ShopContext";


function App() {
  return (
    <div className="App">
        <ShopContextProvider/>
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Shop/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
