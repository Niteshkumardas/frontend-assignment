import React from 'react';
import './App.css';
// import{BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';



function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    {/* // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<home/>}/>
    //     <Route path="/Product" element={<product/>}/>

    //   </Routes>
    // </BrowserRouter> */}
    </>
  );
}
export default App;