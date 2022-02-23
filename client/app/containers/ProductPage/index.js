/**
 *
 * ProductPage
 *
 */

import React from "react";
import { connect } from "react-redux";

import actions from "../../actions";

import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { BagIcon } from "../../components/Icon";
import NotFound from "../../components/NotFound";
import LoadingIndicator from "../../components/LoadingIndicator";
import Crousal from "../../components/Crousal";
import { fetchProductImages } from "../Product/actions";

import "./style.css";

class ProductPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      sizeWarning: false,
    };
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  componentDidMount() {
    console.log("I am here 1 Mount");
    const slug = this.props.match.params.slug;
    this.props.fetchProduct(slug);
    document.body.classList.add("product-page");
  }

  componentDidUpdate(prevProps) {
    console.log("I am here 2 Update");
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      console.log("i am in if");
      const slug = this.props.match.params.slug;
      this.props.fetchProduct(slug);
    }
    console.log(prevProps);

    const getProductImages = async () => {
      console.log("i am in function");
      let res = await fetchProductImages({
        id: prevProps.product.imagesproducts,
      });
      console.log(res);

      this.setState({
        images: res.data.images,
      });
    };

    if (this.state.images.length === 0) {
      getProductImages();
    }
  }

  componentWillUnmount(prevProps) {
    console.log(prevProps, "i am good");

    document.body.classList.remove("product-page");
  }

  handleSizeChange(evt) {
    console.log(evt);
    if (evt.target.value >= 6.5) {
      this.props.productShopChange(evt.target.name, evt.target.value);
      this.setState({
        ...this.state,
        sizeWarning: false,
      });
    } else {
      this.setState({
        ...this.state,
        sizeWarning: true,
      });
    }
  }

  render() {
    const {
      isLoading,
      product,
      productShopData,
      shopFormErrors,
      itemsInCart,
      productShopChange,
      handleAddToCart,
      handleRemoveFromCart,
    } = this.props;

    // if (product) {
    //   console.log("i am in if");
    //   const getProductImages = async () => {
    //     console.log("i am in function");
    //     let res = await fetchProductImages({ id: product.imagesproducts });
    //     console.log(res);
    //     this.setState({
    //       images: res.data.images,
    //     });
    //   };

    //   getProductImages();
    // }

    function showProduct() {
      // console.log(product.brand.name);
    }

    // console.log(product.brand)

    return (
      <div className="product-shop">
        {isLoading ? (
          <LoadingIndicator />
        ) : Object.keys(product).length > 0 ? (
          <Row onLoad={showProduct()}>
            <Col xs="12" md="5" lg="5" className="mb-3">
              {/* {console.log(product.inventory)} */}
              {/* <div className="item-image zoom-img">
                <img src={product.image} />
                {product.inventory <= 0 && !shopFormErrors["quantity"] ? (
                  <p className="stock out-of-stock">Out of stock</p>
                ) : (
                  <p className="stock in-stock">In stock</p>
                )}
              </div> */}
              <Crousal
                image={
                  this.state.images.length > 0
                    ? this.state.images
                    : product.image
                }
              />
            </Col>
            <Col xs="12" md="7" lg="7" className="mb-3">
              <div className="product-container">
                <div className="item-box">
                  <div className="item-details">
                    <h1 className="item-name">{product.name}</h1>
                    <p className="sku">{product.sku}</p>
                    <hr />
                    {product.brand && (
                      <p className="by">
                        see more from{" "}
                        <Link
                          to={`/shop/brand/${product.brand.slug}`}
                          className="brand-link"
                        >
                          {product.brand.name}
                        </Link>
                      </p>
                    )}
                    <p className="item-desc">{product.description}</p>
                    <p className="price">${product.price}</p>
                  </div>
                  <div className="item-customize">
                    <Input
                      type={"number"}
                      error={shopFormErrors["quantity"]}
                      label={"Quantity"}
                      name={"quantity"}
                      min={1}
                      max={product.inventory}
                      placeholder={"Product Quantity"}
                      disabled={
                        product.inventory <= 0 && !shopFormErrors["quantity"]
                      }
                      value={productShopData.quantity}
                      onInputChange={(name, value) => {
                        productShopChange(name, value);
                      }}
                    />
                  </div>
                  {product.brand.name === "Bijika" ? (
                    <div className="item-customize">
                      <Input
                        type={"number"}
                        error={shopFormErrors["size"]}
                        label={"size"}
                        name={"size"}
                        min={1}
                        max={10}
                        placeholder={"Size"}
                        disabled={
                          product.inventory <= 0 && !shopFormErrors["size"]
                        }
                        value={productShopData.size}
                        onInputChange={(name, value) => {
                          if (value < 6.5) {
                            productShopChange(name, value);
                            this.setState({
                              ...this.state,
                              sizeWarning: true,
                            });
                          } else {
                            productShopChange(name, value);
                            this.setState({
                              ...this.state,
                              sizeWarning: false,
                            });
                          }
                        }}
                        // onInputChange={(evt) => this.handleSizeChange(evt)}
                      />
                      <div
                        class="toast"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      ></div>
                    </div>
                  ) : null}

                  {this.state.sizeWarning === true && (
                    <div class="alert alert-danger" role="alert">
                      Size must be according to the given sizes
                    </div>
                  )}

                  <div className="item-actions">
                    {itemsInCart.includes(product._id) ? (
                      <Button
                        disabled={
                          product.inventory <= 0 && !shopFormErrors["quantity"]
                        }
                        text="yo From Bag"
                        className="bag-btn"
                        icon={<BagIcon />}
                        onClick={() => handleRemoveFromCart(product)}
                      />
                    ) : (
                      <Button
                        disabled={
                          product.quantity <= 0 && !shopFormErrors["quantity"]
                        }
                        text="Add To Bag"
                        className="bag-btn"
                        icon={<BagIcon />}
                        onClick={() => handleAddToCart(product)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <NotFound message="no product found." />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
    productShopData: state.product.productShopData,
    shopFormErrors: state.product.shopFormErrors,
    itemsInCart: state.cart.itemsInCart,
    isLoading: state.product.isLoading,
  };
};

export default connect(mapStateToProps, actions)(ProductPage);
