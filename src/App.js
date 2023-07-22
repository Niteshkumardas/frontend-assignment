import React from 'react';
import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/product/:id" element={<ProductDetail/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;