import React from 'react';
import SummaryItem from './SummaryItem';

const SummaryList = ({products, incProducts, decProducts, removeProducts}) => {
  return <div>
      {products.map(product=>(
          <SummaryItem key={product.id} product={product} incProducts={incProducts} decProducts={decProducts} removeProducts={removeProducts}/>
      ))}
  </div>;
};

export default SummaryList;
