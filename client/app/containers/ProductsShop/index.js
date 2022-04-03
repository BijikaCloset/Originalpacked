/**
 *
 * ProductsShop
 *
 */

import React from "react";
import { connect } from "react-redux";

import actions from "../../actions";
import ProductsContext from "../../Context/Product-Context";
import { useProducts } from "../../Context/Product-Context";

import ProductList from "../../components/ProductList";
import NotFound from "../../components/NotFound";
import LoadingIndicator from "../../components/LoadingIndicator";

const ProductsShop = () => {
  // static contextType = ProductsContext;
  // componentDidMount() {
  //   // const slug = this.props.match.params.slug;
  //   // console.log(slug);
  //   // this.props.fetchProducts(slug);
  //   // const productsContextValue = this.context;
  //   // console.log(productsContextValue);
  // }

  // render() {
  // const { products, isLoading } = this.props;
  // const { products, isLoading } = useProducts();
  // console.log(products, isLoading);
  // console.log(productsContextValue);
  const { products, isLoading } = useProducts();
  console.log(products, isLoading);

  return (
    <div className="products-shop">
      {isLoading ? (
        <LoadingIndicator />
      ) : products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <NotFound message="no products found." />
      )}
    </div>
  );
  // }
};

// const mapStateToProps = (state) => {
//   return {
//     products: state.product.products,
//     isLoading: state.product.isLoading,
//   };
// };

export default ProductsShop;
