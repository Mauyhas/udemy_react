import React from 'react';

const ProductListItem = ({ product, onProductSelect, onProductChange }) => {
    if(!product){
        return <div>Loding...</div>
    }else{
        return (<li  onClick={() => onProductSelect(product)}>
        <div>
            <input onChange={()=>onProductChange(product)} value={product.name} type="text"/>
        </div>
        <div>{product.description} </div>
        <img src = {product.image} />
        <button onClick={()=> onProductSave(product)}>Save Changes</button>
    </li>
    );
    }
    
};

export default ProductListItem;