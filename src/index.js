//loadash - enable debunace for search term
//

//produces html
//handle components
import React, { Component } from 'react';
//handle react dom create
import ReactDOM from 'react-dom';

import ProductsList from './components/product_list';
//es6 const - same as var but const = final values
//not gone reasign app
import ProductDetail from './components/product_detail'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { id: 1, name: 'iphone X', Description: 'Apple iphone X', Price: 3000, Creation_Date: '10/10/2015', url: 'https://cnet1.cbsistatic.com/img/J9XjCVC1SivZy8O0hRgNwUkM75U=/1600x900/2018/01/03/561a4a5d-bf5a-4da6-943e-af271a49c2b7/iphone-x-battery-test-apple-support.jpg' },
                { id: 2, name: 'S9', Description: 'Samsung S9', Price: 3100, Creation_Date: '10/11/2015', url: 'https://www.gadgety.co.il/wp-content/themes/main/thumbs/2018/02/Galaxy-S9-and-S9-Plus.jpg' },
                { id: 3, name: 'U11', Description: 'HTC u11', Price: 2800, Creation_Date: '10/12/2015', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hbNuQW6FFPKbDUzT26ALkp_iifu3aqHaw6BY3BIGRNcmpoKu-Q' }

            ],
            selectedProduct: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    deleteProduct(product) {
        var copyOfProducts = this.state.products.slice(); //shlow copy
        var index = copyOfProducts.indexOf(product);
        copyOfProducts.splice(index, 1);
        if (index > -1) {
            this.setState({ products: copyOfProducts });
        }
    }
    onProductChange(product) {
        var temp = Object.assign({}, product);
        //TODO
    }
    onProductSave(product) {
        var copyOfProducts = this.state.products.slice(); //shlow copy
        var index = copyOfProducts.indexOf(product);
        copyOfProducts.splice(index, 1);
        copyOfProducts.push(product);
        if (index > -1) {
            this.setState({ products: copyOfProducts });
        }
    }
    handleSubmit(event) {
        //console.log(event);
        event.preventDefault();
        var newObject = {};
        let newName = event.target[0].value;
        let desc = event.target[1].value;
        let price = event.target[2].value;
        //some validation chekcs
        if (newName && desc && (price > 0)) {
            newObject.name = newName;
            newObject.Description = desc;
            newObject.Price = price;
            newObject.id = this.state.products.length;
            newObject.id++;
            var copyOfProducts = this.state.products.slice(); //shlow copy
            copyOfProducts.push(newObject);
            this.setState({ products: copyOfProducts });
        }
    }
    //selectedProduct: products[0] // set default
    render() {


        return (<div>

            <ProductsList
                onProductSelect={selectedProduct => this.setState({ selectedProduct })}
                onProductDelete={product => this.deleteProduct(product)}
                products={this.state.products}
                onProductChange={product => this.onProductChange(product)}
                onProductSave={product => this.onProductSave(product)}
            />
            <ProductDetail product={this.state.selectedProduct} />
            <br />
            <h2>Add product</h2>
            <form onSubmit={this.handleSubmit}>
                name: <input id='name' name='name' type='text' />
                Description <input id='Description' name='Description' type='text' />
                Price <input id='Price' name='Price' type='number' />
                <input type="submit" value="Submit" />
            </form>
        </div>);
    }

}
//put in dom generated html
//ReactDOM.render takes instance of a class 
//takes 2 args a instance and a html exsiting component to put it to
ReactDOM.render(<App />, document.querySelector('.container'));
//downards data flow
//only the parent should handle data