import React from 'react';
import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/product/:id" element={<ProductDetail/>} />
      <Route path='/cart' Component={Cart}/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}
export default App;