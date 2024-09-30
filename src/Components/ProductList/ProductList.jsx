// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "../ ProductCard / ProductCard";
// import "./ProductList.css";

// const ProductList = (addToCart) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://dummyjson.com/products?limit=100"
//         );
//         setProducts(response.data.products);
//       } catch (error) {
//         console.error("Error in fetching", error);
//         setError("Error fetches products");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);
//   if (loading) {
//     return <div>Loading</div>;
//   }
//   if (error) {
//     return <div>{error}</div>;
//   }
//   return (
//     <div>
//       <div className="products-list">
import { ProductCard } from "../ ProductCard / ProductCard";

import "./ProductList.css";
export const ProductList = ({ products, addToCart }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
