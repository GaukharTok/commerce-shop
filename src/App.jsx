// import React, { useState } from "react";
// import ProductList from "./Components/ProductList/ProductList";
// import Cart from "./Components/Cart/Cart";
// import "./App.css";
// const App = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//     alert(`${product} had been added already`);
//   };
//   return (
//     <div className="app">
//       <h1>PRODUCTS</h1>
//       <div className="yourCart">
//         <ProductList addToCart={addToCart} />
//         <Cart cartItems={cartItems} />
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { createContext, useEffect, useState } from "react";
// import "./App.css";
// import { getProducts } from "./api/getProducts";
// import { filterProducts } from "../src/utils/utils";
// import { getSearchProducts } from "../src/api/getProducts";

// import Header from "./Components/Header/Header";
// import ProductList from "./Components/ProductList/ProductList";
// import Cart from "./Components/Cart/Cart";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [categories, setCategory] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await getProducts();
//       setProducts(result);
//       setCategory(getAllCategories(result));
//       setFilteredProducts(result);
//     };
//     fetchData();
//   }, []);

//   const getAllCategories = (products) => {
//     let result = [];
//     for (let each of products) {
//       if (!result.includes(each.category)) {
//         result.push(each.category);
//       }
//     }
//     return result;
//   };
//   useEffect(() => {
//     if (selectedCategory === "All") {
//       setFilteredProducts(products);
//     } else {
//       filterProducts(selectedCategory); // Теперь это работает корректно
//     }
//   }, [selectedCategory]);

//   const filterProducts = (category) => {
//     const filtered = products.filter(
//       (product) => product.category === category
//     );
//     setFilteredProducts(filtered);
//   };

//   const onCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };
//   const addToCart = (product) => {
//     let existingProduct = cart.filter((p) => p.id === product.id);
//     if (existingProduct.length > 0) {
//       setCart(
//         cart.map((el) =>
//           el.id === product.id
//             ? { ...el, quantityInCart: el.quantityInCart + 1 }
//             : el
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantityInCart: 1 }]);
//     }
//   };

//   const removeFromCart = (id) => {
//     setCartItems(cart.filter((item) => item.id !== id));
//   };
//   const onSearchClick = () => {
//     const fetchSearchProducts = async () => {
//       let result = await getSearchProducts(inputValue);
//       setFilteredProducts(result);
//       console.log(result);
//     };
//     // getSearchProducts(inputValue);
//     fetchSearchProducts();
//   };

//   const onInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div>
//       <Header
//         categories={categories}
//         onCategoryChange={onCategoryChange}
//         setSelectedCategory={setSelectedCategory}
//         onSearchClick={onSearchClick}
//         onInputChange={onInputChange}
//         cartItems={cart}
//         setCartItems={setCart}
//       />
//       <Cart cartItems={cart} removeFromCart={removeFromCart} />
//       {/* <ProductCard products={products} addToCart={addToCart} /> */}
//       <ProductList products={filteredProducts} addToCart={addToCart} />
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import { getProducts } from "./api/getProducts";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import Cart from "./Components/Cart/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts();
      setProducts(result);
      setCategories(getAllCategories(result));
      setFilteredProducts(result);
    };
    fetchData();
  }, []);

  const getAllCategories = (products) => {
    return [...new Set(products.map((product) => product.category))];
  };

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === product.id
            ? { ...p, quantityInCart: p.quantityInCart + 1 }
            : p
        );
      }
      return [...prevCart, { ...product, quantityInCart: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantityInCart: quantity } : item
        )
      );
    }
  };

  const onSearchClick = async () => {
    if (inputValue) {
      const result = await getSearchProducts(inputValue);
      setFilteredProducts(result);
    }
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Header
        categories={categories}
        onCategoryChange={(e) => setSelectedCategory(e.target.value)}
        onSearchClick={onSearchClick}
        onInputChange={onInputChange}
      />
      <Cart
        cartItems={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
}

export default App;
