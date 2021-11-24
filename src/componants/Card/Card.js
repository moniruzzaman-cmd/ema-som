import React from 'react';



const Card = (props) => {
    const card = props.card;

    let total = 0;
    for (let i = 0; i < card.length; i++) {
        const product = card[i];
        total = total + product.price;


    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0
    } else if (total >= 15) {
        shipping = 4.99
    } else if (total > 0) {
        shipping = 12.99
    }
    let tex = total / 10

    const ProductPriceFigerfix = num => {
        const productPricefix = num.toFixed(2)
        return Number(productPricefix)
    }
    const totalprice = (ProductPriceFigerfix(total) + ProductPriceFigerfix(shipping) + ProductPriceFigerfix(tex))
    return (
        <div>
            {/*           
          <h1>this is shop {products.length}</h1>
            <p>shoping item {card.length}</p> */}
            <h3>Oder sammary</h3>
            <h5>total Order : {card.length}</h5>
            <p> shipping cost : {ProductPriceFigerfix(shipping)}</p>
            <p> product price : {ProductPriceFigerfix(total)}</p>
            <p> tax/ VAT : {ProductPriceFigerfix(tex)}</p>
            <p> Total price {totalprice}</p>


        </div>
    );
};

export default Card;