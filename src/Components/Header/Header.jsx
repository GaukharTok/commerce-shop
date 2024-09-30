// import React from "react";
// // import Cart from "../Cart/Cart";

// import "./Header.css";

// export const Header = ({
//   categories,
//   onCategoryChange,
//   onInputChange,
//   onSearchClick,
//   removeFromCart,
//   сartItems,
// }) => {
//   return (
//     <>
//       <div className="main-div">
//         <div className="header">
//           <div className="search">
//             <input type="text" onChange={onInputChange} />
//             <button onClick={onSearchClick}>Search</button>
//           </div>
//         </div>
//         <div className="header_filter">
//           <select name="" id="" onChange={onCategoryChange}>
//             <option value="All">All</option>
//             {categories.map((category) => {
//               return (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               );
//             })}
//           </select>
//         </div>
//         <div className="cart-products">
//           <h3>
//             {/* Cart:{" "}
//             {сartItems
//               ? сartItems.reduce((acc, item) => acc + item.quantityInCart, 0)
//               : 0}{" "}
//             products */}
//           </h3>
//           {/*
//           <button
//             onClick={() => сartItems.forEach((item) => removeFromCart(item.id))}
//           >
//             Clear Cart
//           </button> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React from "react";
import "./Header.css";

export const Header = ({
  categories,
  onCategoryChange,
  onInputChange,
  onSearchClick,
}) => {
  return (
    <div className="main-div">
      <div className="header">
        <div className="search">
          <input type="text" onChange={onInputChange} />
          <button onClick={onSearchClick}>Search</button>
        </div>
      </div>
      <div className="header_filter">
        <select onChange={onCategoryChange}>
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
