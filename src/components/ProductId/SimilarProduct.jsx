/* eslint-disable react/prop-types */

import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import CardProduct from "../Home/CardProduct";

const SimilarProduct = ({ product }) => {
  const BASE_URL = import.meta.env.VITE_REACT_APP_URL;
  const base_Url = BASE_URL;

  const baseUrl = `${base_Url}/products?Id=`;
  const [productsByCategory, getProductsByCategory] = useFetch(baseUrl);

  useEffect(() => {
    if (product) {
      getProductsByCategory(`${product.categoryId}`);
    }
  }, [product]);

  return (
    <div>
      <h2>Similar Products</h2>
      <div className="home_product-container">
        {productsByCategory?.map((prod) => {
          if (
            prod.id !== product?.id &&
            prod.categoryId === product.categoryId
          ) {
            return <CardProduct key={prod.id} prod={prod} />;
          }
        })}
      </div>
    </div>
  );
};

export default SimilarProduct;
