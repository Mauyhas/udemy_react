import React from 'react';

const ProductDetail = ({product}) =>{
    if(!product){
        return <div>PLease select a product.</div>
    }else{
        return (
            <div>
                <div>{product.name} </div>
                <div>{product.Description} </div>
                <img src = {product.url} />
            </div>
            
        )
    }
    
};

export default ProductDetail;