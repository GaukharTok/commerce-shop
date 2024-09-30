// import React, { useState } from "react";
// import "./ProductCard.css";

// const ProductCard = ({ product, addToCart }) => {
//   const [imageError, setImageError] = useState(false);
//   const handleImageError = () => {
//     setImageError(true);
//   };

//   if (imageError) {
//     return null;
//   }
//   return (
//     <div>
//       <div className="producut-card">
//         <img className="imgCarts" src={product.images[0]} alt={product.title} />
//         <h2>{product.title}</h2>
//         <p>{product.description}</p>
//         <p> Price: ${product.price}</p>
//         <p>
//           {product.stock > 0 ? `In stock: ${product.stock}` : "Out of Stock"}
//         </p>
//         <button className="addToCart" onClick={() => addToCart(product)}>
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import "./ProductCard.css";
import { discountedPrice } from "../../utils/utils";

export const ProductCard = ({ product, addToCart }) => {
  let {
    images,
    title,
    description,
    price,
    discountPercentage,
    stock,
    brand,
    reviews,
    tags,
  } = product;
  //   const avgRatingValue = avgRating(product.reviews);
  const priceDiscountValue = discountedPrice(
    product.price,
    product.discountPercentage
  );

  let averageRating = (reviews) => {
    let totalReview = reviews.length;

    let totalRating = 0;
    reviews.forEach((review) => (totalRating += review.rating));
    return (totalRating / totalReview).toFixed(2);
  };

  return (
    <div className="item-card">
      <div className="item-card_image">
        <img src={images[0]} alt={title} />
        <div className="item-card_description">
          <h2>{title}</h2>
          <h5>{brand}</h5>
          <h3>{description}</h3>
          <div className="item-card_tags">
            <span>Tags: {tags.join(", ")}</span>
            {/* <p>{rating}</p> */}
            <p>Rating: {averageRating} ⭐️</p>
            <h3>Regular price: {price}</h3>
            <h3>Discount price: {priceDiscountValue}</h3>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
