import React from 'react';

const Summary = ({products}) => {
  return (
  <div className="checkout-summary-title">
    <h5>Winkellijst</h5>
    <h5>{products.length} Producten</h5>
  </div>)
};

export default Summary;
