import React from 'react'


const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
            <a className="navbar-brand fw-bold fs-4" href="#">Onlinestore</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Product</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                </ul>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className='buttons'>
                    <a href="" className='btn btn-outline-dark ms-2'>
                        <i className='fa fa-sign-in me-2'></i>Login</a>
                    <a href="" className='btn btn-outline-dark ms-2'>
                        <i className='fa fa-user-plus me-2'></i>Signup</a>
                    <a href="" className='btn btn-outline-dark ms-2'>
                        <i className='fa fa-cart-plus me-2'></i>Cart(0)</a>

                </div>
            </div>
            </div>
        </nav>
        </>
       
    );
}

export default Navbar;
