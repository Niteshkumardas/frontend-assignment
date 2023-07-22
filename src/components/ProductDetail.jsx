import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
////////////////////////////////////
const ProductDetail = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

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
        }

    const getProducts = async () => {
        setLoading(true);
        
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
           
            setProduct(await response.json());
            setLoading(false);
            return;
        
           
        }
    useEffect(() => {
       
        getProducts();
       

    },[]);

   
    const ShowProduct= ()=>{
        console.log(product.image)
        return(
        <>
                    <div className="col-md-6">
                        <img src={product.image} alt={product.title} height="400px" width="400px"/>}
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr/>
                        <h2 className="my-4">${product.price}</h2>
                        <p className="lead">{product.description}</p>
                        <button className='btn btn-outline-dark'></button>
                    </div>
                
            </>
        )
    }

    return(
        <div>
            <div className='container'>
                <div className='row'>
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>
        </div>
    );
    }

export default ProductDetail;
////////////////////////////////////////////////
 