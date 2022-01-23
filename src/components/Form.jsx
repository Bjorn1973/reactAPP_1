import React,{useState} from 'react';

const Form = ({addProducts}) => {
    const [nameValue,setNameValue] = useState("");
    const [countValue,setCountValue] = useState(0);
    const [priceValue,setPriceValue] = useState(0.00);


  return (
      <form onSubmit={(e)=>{
          e.preventDefault();
        addProducts({name:nameValue,count:countValue,price:priceValue})
        setNameValue("")
        setCountValue(0)
        setPriceValue(0.00)
      }}>
          <label htmlFor="productname">Product</label>
          <input type="text" id="productname" value={nameValue} onChange={(e)=>{setNameValue(e.target.value)}}/>
          <label htmlFor="productCount">Aantal</label>
          <input type="number" id="productCount" value={countValue} onChange={(e)=>{setCountValue(parseInt(e.target.value))}}/>
            <label htmlFor="productPrice">Eenheidsprijs</label>
          <input type="number" step="0.01" id="productPrice" value={priceValue} onChange={(e)=>{setPriceValue(parseFloat(e.target.value))}}/>
          <button>Toevoegen</button>
      </form>
  );
};

export default Form;
