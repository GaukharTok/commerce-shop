// export const avgRating = (reviews) => {
//   let totalRating = 0;
//   let totalReview = reviews.length;
//   reviews.forEach((review) => (totalRating += review.rating));
//   return (totalRating / totalReview).toFixed(2);
// };

export const discountedPrice = (price, discountPercentage) => {
  return (price - (price * discountPercentage) / 100).toFixed(2);
};
// export const discountedPrice = (price, discountPercentage) => {
//   return (price - (price * discountPercentage) / 100).toFixed(2);
// };

export const filterProducts = (category, setFilteredProducts) => {
  setFilteredProducts([
    ...products.filter((product) => {
      return product.category === category;
    }),
  ]);
};
