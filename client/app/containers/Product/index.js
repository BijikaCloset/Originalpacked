/*
 *
 * Product
 *
 */

import React from "react";
import { connect } from "react-redux";

import actions from "../../actions";
import { useProducts } from "../../Context/Product-Context";

import AddProduct from "../../components/AddProduct";
import Table from "../../components/Table";
import SubPage from "../../components/SubPage";
import LoadingIndicator from "../../components/LoadingIndicator";

class Product extends React.PureComponent {
  componentDidMount() {
    this.props.fetchBrandsSelect();
    this.props.fetchProducts();
  }

  render() {
    const {
      productFormData,
      formErrors,
      productChange,
      addProduct,
      products,
      columns,
      toggleAddProduct,
      isProductAddOpen,
      deleteProduct,
      handleBrandSelect,
      selectedBrands,
      brands,
      taxableSelect,
    } = this.props;

    return (
      <div className="product-dashboard">
        <SubPage
          title={isProductAddOpen ? "Add Product" : "Product List"}
          isMenuOpen={isProductAddOpen}
          toggleMenu={toggleAddProduct}
        >
          {isProductAddOpen ? (
            <AddProduct
              productFormData={productFormData}
              formErrors={formErrors}
              productChange={productChange}
              addProduct={addProduct}
              handleBrandSelect={handleBrandSelect}
              selectedBrands={selectedBrands}
              brands={brands}
              taxableSelect={taxableSelect}
            />
          ) : (
            <Table
              data={products}
              columns={columns}
              striped={true}
              hover={true}
              condensed={true}
              csv={true}
              search={true}
              isRowEvents={true}
              editEvent={false}
              deleteEvent={false}
              clickAction={(id, index) => deleteProduct(id, index)}
            />
          )}
        </SubPage>
      </div>
    );
  }
}

// const Product = (props) => {
//   const {
//     productFormData,
//     formErrors,
//     productChange,
//     addProduct,
//     // products,
//     columns,
//     toggleAddProduct,
//     isProductAddOpen,
//     deleteProduct,
//     handleBrandSelect,
//     selectedBrands,
//     brands,
//     taxableSelect,
//   } = props;
//   const { products, isLoading } = useProducts();
//   console.log(products, isLoading);
//   console.log(
//     productFormData,
//     formErrors,
//     productChange,
//     addProduct,
//     // products,
//     columns,
//     toggleAddProduct,
//     isProductAddOpen,
//     deleteProduct,
//     handleBrandSelect,
//     selectedBrands,
//     brands,
//     taxableSelect
//   );

//   return (
//     <div className="product-dashboard">
//       {isLoading ? (
//         <LoadingIndicator />
//       ) : (
//         <SubPage
//           title={isProductAddOpen ? "Add Product" : "Product List"}
//           isMenuOpen={isProductAddOpen}
//           toggleMenu={toggleAddProduct}
//         >
//           {isProductAddOpen ? (
//             <AddProduct
//               productFormData={productFormData}
//               formErrors={formErrors}
//               productChange={productChange}
//               addProduct={addProduct}
//               handleBrandSelect={handleBrandSelect}
//               selectedBrands={selectedBrands}
//               brands={brands}
//               taxableSelect={taxableSelect}
//             />
//           ) : (
//             <Table
//               data={products}
//               columns={columns}
//               striped={true}
//               hover={true}
//               condensed={true}
//               csv={true}
//               search={true}
//               isRowEvents={true}
//               editEvent={false}
//               deleteEvent={false}
//               clickAction={(id, index) => deleteProduct(id, index)}
//             />
//           )}
//         </SubPage>
//       )}
//     </div>
//   );
// };

const mapStateToProps = (state) => {
  return {
    productFormData: state.product.productFormData,
    products: state.product.products,
    formErrors: state.product.formErrors,
    columns: state.product.columns,
    isProductAddOpen: state.product.isProductAddOpen,
    taxableSelect: state.product.taxableSelect,
    selectedBrands: state.brand.selectedBrands,
    brands: state.brand.brandsSelect,
  };
};

export default connect(mapStateToProps, actions)(Product);
