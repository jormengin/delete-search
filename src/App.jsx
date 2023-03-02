import React, { useState } from "react";
import "./App.css";
import productData from "./products.json";
import ProductCard from "./components/ProductCard";
import SearchInput from "./components/SearchInput";
import AddProductForm from "./components/AddProduct";

function App() {
  const [products, setProducts] = useState(productData);
  const [searchValue, setSearchValue] = useState("");

  const handleDelete = (id) => {
    const cleanProducts = [...products].filter((elem) => elem._id !== id);
    setProducts(cleanProducts);
  };
  const handleNewProduct = (obj) => {
    const product = { ...obj, _id: new Date().toString() };
    setProducts([...products, product]);
  };

  const handleSearch = (string) => {
    setSearchValue(string);
  };

  return (
    <>
      <h1>My shopping cart</h1>
      <SearchInput handleSearch={handleSearch} />
      <AddProductForm handleNewProduct={handleNewProduct} />
      <div className="cart">
        {products
          .filter((elem) => elem.name.toLowerCase().includes(searchValue))
          .map((elem) => {
            return (
              <ProductCard
                product={elem}
                key={elem.id}
                handleDelete={handleDelete}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
