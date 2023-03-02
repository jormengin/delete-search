import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCard from './components/ProductCard'

function App() {
  const [products, setProducts] = useState(productData);

  const handleDelete =(id)=>{
    const cleanProducts = [...products].filter(elem => elem._id !== id)
    setProducts(cleanProducts)
  }
  return (
    <>
      <h1>My shopping cart</h1>
      <div className="cart">
       {products.map(elem =>{
        return <ProductCard product={elem} key={elem.id} handleDelete={handleDelete} />
       })}
      </div>
    </>
  );
}

export default App;
