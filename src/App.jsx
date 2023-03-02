import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import ProductCard from './components/ProductCard';
import SearchInput from './components/SearchInput';

function App() {
  const [products, setProducts] = useState(productData);
  const[searchValue, setSearchValue] = useState('');
  const handleDelete =(id)=>{
    const cleanProducts = [...products].filter(elem => elem._id !== id)
    setProducts(cleanProducts)
  }
  
  const handleSearch =(string)=>{
      setSearchValue(string)
  }

  return (
    <>
      <h1>My shopping cart</h1>
      <SearchInput handleSearch={handleSearch}/>
      <div className="cart">
       {products.filter(elem=> elem.name.toLowerCase().includes(searchValue)).map(elem =>{
        return <ProductCard product={elem} key={elem.id} handleDelete={handleDelete} />
       })}
      </div>
    </>
  );
}

export default App;
