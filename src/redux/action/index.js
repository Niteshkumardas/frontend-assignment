import React from 'react'

//For add item to cart
export const addCart = (product) => {
  return {
        type : "ADDITEM",
        payload : product
  };
};



//For Delete Item From cart
export const delCart = (product) => {
    return {
          type : "DELITEM",
          payload : product
    };
  };
  
