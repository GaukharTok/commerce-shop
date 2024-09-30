import axios from "axios";
let PRODUCT_URL = "https://dummyjson.com/products?limit=100";
let SEARCHED_PRODUCTS_URL = "https://dummyjson.com/products/search?q=";
export const getProducts = async () => {
  try {
    let response = await axios.get(PRODUCT_URL);
    return response.data.products;
  } catch (error) {
    console.log(`Error on fetching: ${error}`);
  }
};

export const getSearchProducts = async (searchValue) => {
  try {
    let response = await axios(SEARCHED_PRODUCTS_URL + searchValue);
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
};
