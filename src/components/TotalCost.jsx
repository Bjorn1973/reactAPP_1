import React from 'react';

const TotalCost = ({products}) => {
    
    console.log(products.map(product => parseFloat(Number.parseFloat(product.count * product.price).toFixed(2))).reduce((prevVal, nextVal)=> prevVal + nextVal ,0))

  return (<div className="checkout-summary-details">
  <div className="left">
        <p><strong>Totaal:</strong></p>
  </div>
  <div className="right">
        <p>€ {products.map(product => parseFloat(Number.parseFloat(product.count * product.price).toFixed(2))).reduce((prevVal, nextVal)=> prevVal + nextVal ,0).toFixed(2)}</p>
  </div>
</div>);
};

export default TotalCost;
