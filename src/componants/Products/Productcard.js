import React from 'react';
import  './Product.css';

const Productcard = (props) => {
    const {img,name,seller,price,stock} = props.product
    // console.log(props)
    

    return (
        <div className="product">
            <div>
                <img src={img} alt="img" />

            </div>
            <div ><h4 className="product-name">{props.product.name} </h4>
           
            <p><small>by : {seller}</small></p>
            <p>${price}</p>
            <p><small>only {stock} left in stock - oder soon</small></p>
            <button className="main-button" onClick={ ()=>props.handleaddproduct(props.product)}>add to card</button>
            
            
            
            </div>
            
        </div>
    );
};

export default Productcard;