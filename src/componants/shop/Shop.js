import React, { useState } from 'react';
import Productcard from '../Products/Productcard';
import Products from '../Products/Productcard';
import Data from './Fakedata/products';
import  './Shop.css';
import Card from '../Card/Card';

const Shop = () => {
  const First10 = Data.slice(0,10);
  const [products,setFakeData] = useState(First10)
  const [card, setcard] = useState([])

  const handleaddproduct = (product)=>{
      const Newcard = [...card, product]
      setcard(Newcard);
  }
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    { products.map( prdct => <Productcard handleaddproduct ={handleaddproduct} product={prdct} />)
                    }
                </ul>
            </div>
            <div className="card-conatiner">
            <Card  card = {card} />

            </div>
        </div>
    );
};

export default Shop;