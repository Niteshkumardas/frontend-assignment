import React from 'react';
import{ Link }from 'react-router-dom';
import{ useSelector} from "react-redux";


const Navbar = () => {
        const state =useSelector((state)=> state.handleCart)
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
            <Link className="navbar-brand fw-bold fs-4" to="/">Onlinestore</Link >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Product">Home</Link >
                </li>
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link >
                </li> */}
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/ProductDetail">Product</Link >
                </li> */}
                </ul>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className='buttons'>
                    <Link to="/login" className='btn btn-outline-dark ms-2'>
                        <i className='fa fa-sign-in me-2'></i>Login</Link >
                    <Link to="/signup" className='btn btn-outline-dark ms-2'>
                        <i className='fa fa-user-plus me-2'></i>Signup</Link >
                    <Link to="/cart" className='btn btn-outline-dark ms-2'>
                        <span className='fa fa-shopping-cart me-2'></span>Cart({state.length})</Link >

                </div>
            </div>
            </div>
        </nav>
        </>
       
    );
}

export default Navbar;