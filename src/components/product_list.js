import React from 'react';
import ProductsListItem from './product_list_item'
const ProductsList = (props) => {
    const ProductsListtems = props.products.map((product) => {
        return (<div><ProductsListItem
            key={product.id}
            product={product}
            onProductSelect={props.onProductSelect}
            onProductChange ={props.onProductChange}
            onProductSave = {props.onProductSave}
        />
            <button onClick={() => props.onProductDelete(product)}>X</button>

        </div>);
    });
    return (

        <ul className="col-md-4">
            {ProductsListtems}
        </ul>

    );
}
export default ProductsList;