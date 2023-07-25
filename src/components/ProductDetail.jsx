import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import {addCart} from "../redux/action"

const ProductDetail = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product))
    }


    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                   <Skeleton height={4000}/> 
                </div>
                <div className='col-md-3'>
                   <Skeleton height={50} width={300}/> 
                   <Skeleton height={75}/>
                </div>
            </>

        );
        }

    
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);   
            setProduct(await response.json());
            setLoading(false);   
        }
       
        getProduct();
       

    }, []);

   
    const ShowProduct= ()=>{
      
        return(
        <>
                    <div className="col-md-6">
                        <img src={product.image} alt={product.title} height="400px" width="400px"/>
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr/>
                        <p className='lead fw-bolder'>
                            Rating{product.rating && product.rating.rate}
                            <i className='fa fa-star'></i>
                        </p>
                        <h2 className="my-4">${product.price}</h2>
                        <p className="lead">{product.description}</p>
                        <button  className="btn btn-outline-dark px-4 py-2" onClick={()=> addProduct(product)}>Add to cart</button>
                        <Link to="/cart" className="btn btn-dark ms-4 px-4 py-2">Go to cart</Link>
                        
                    </div>
                
            </>
        )
    }

    return(
        <div>
            <div className='container py-5'>
                <div className='row py-4'>
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    );
    }

export default ProductDetail;

 