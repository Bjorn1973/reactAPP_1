import React from 'react';

const SummaryItem = ({product,  incProducts, decProducts, removeProducts}) => {
  return (<><div key={product.id} className="checkout-summary-item">
  <img src={product.image} alt=""></img>
  <div className="item-name">
    <h3>{product.name}</h3>
    <p><span className="title">Aantal: </span>{product.count}<button onClick={()=>{incProducts(product.id)}} >+</button><button onClick={()=>{decProducts(product.id)}}>-</button></p>
    <p><span className="title">Eenheidsprijs: </span>€ {product.price}</p>
  </div>
  <div className="item-price">
    <p className="title">{Number.parseFloat(product.count * product.price).toFixed(2)}</p>
    <button onClick={()=>{removeProducts(product.id)}}>verwijder</button>
  </div>
</div>
</>);
};

export default SummaryItem;
