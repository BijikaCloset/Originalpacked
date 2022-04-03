import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
// import { API_BASE_URL } from 'src/utils/API_URLS';
// import { withRouter } from 'react-router';
// import { toast } from "react-toastify";
import { fetchProducts } from "../containers/Product/actions";

const ProductsContext = createContext({});

const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      let slug = undefined;
      let response = await fetchProducts(slug);
      console.log(response, "i am response yoo");
      setProducts(response);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  const productsContextValue = {
    products,
    isLoading,
  };

  return <ProductsContext.Provider value={productsContextValue} {...props} />;
};

const useProducts = () => React.useContext(ProductsContext);

export { ProductsProvider, useProducts };
export default ProductsContext;
