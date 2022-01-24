import React, { useState } from "react";
import Form from "./components/Form";
import Summary from "./components/Summary";
import SummaryList from "./components/SummaryList";
import TotalCost from "./components/TotalCost";
import { nanoid } from "nanoid";

function App() {
  const [products, setProducts] = useState([
    {
      id: nanoid(),
      image: "https://p-hold.com/cheese/100/80",
      name: "cheese",
      count: 1,
      price: 2.75,
    },
    {
      id: nanoid(),
      image: "https://p-hold.com/bread/100/80",
      name: "bread",
      count: 2,
      price: 2.55,
    },
    {
      id: nanoid(),
      image: "https://p-hold.com/milk/100/80",
      name: "milk",
      count: 6,
      price: 0.95,
    },
  ]);

  const handleAddProduct = ({ name, count, price }) => {
    setProducts([
      ...products,
      {
        id: nanoid(),
        image: `https://p-hold.com/${name}/100/80`,
        name,
        count,
        price,
      },
    ]);
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleIncProduct = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      })
    );
  };

  const handleDecProduct = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count - 1 };
        }
        return product;
      })
    );
  };

  return (
    <>
      <div className="checkout-summary">
        <Form addProducts={handleAddProduct} />
        <Summary products={products} />
        <SummaryList
          products={products}
          incProducts={handleIncProduct}
          decProducts={handleDecProduct}
          removeProducts={handleRemoveProduct}
        />
        <TotalCost products={products} />
      </div>
    </>
  );
}

export default App;
