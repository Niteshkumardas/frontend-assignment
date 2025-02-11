import React, { useState, useEffect, useRef } from 'react'
import Skeleton from "react-loading-skeleton";
import { Link } from 'react-router-dom';

const Product = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = useRef(true);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
     

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
       

    }, []);

    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                   <Skeleton height={350}/> 
                </div>
                <div className='col-md-3'>
                   <Skeleton height={350}/> 
                </div>
                <div className='col-md-3'>
                   <Skeleton height={350}/> 
                </div>
                <div className='col-md-3'>
                   <Skeleton height={350}/> 
                </div>
            </>

        );
    };

    const filterProduct=(cat)=>{
        const updatedList = data.filter((x)=> x.category===cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons'>
                    <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Mens clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>womens clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3'>
                                <div className="card">
                                    <img src={product.image} className="card-img-top" alt={product.title} height="200px"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title.substring(0,12)}..</h5>
                                            <p className="card-text fw-bold">${product.price}</p>
                                            <Link to={`/product/${product.id}`} className="btn btn-outline-dark">Buy now</Link>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Lastest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Product;
