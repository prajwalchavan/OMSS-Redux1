import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../actions/actions";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.productId = React.createRef();
    this.productName = React.createRef();
    this.category = React.createRef();
    this.quantity = React.createRef();
    this.price = React.createRef();
  }
  componentDidMount() {
    this.props.clearState();
  }

  add(e) {
    e.preventDefault();
    let newProduct = {
      productId: this.productId.current.value,
      productName: this.productName.current.value,
      category: this.category.current.value,
      quantity: this.quantity.current.value,
      price: this.price.current.value,
    };
    console.log(newProduct);
    this.props.onAddProduct(newProduct);
  }

  render() {
    return (
      <div class="text-white">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div
            id="intro-example"
            className="p-5 text-center bg-image"
            style={{
              backgroundImage:
                "url('https://drbest.in/wp-content/uploads/2019/05/Medicines-2.jpg')",
              backgroundSize: "100%",
              backgroundRepeat: "noRepeat",
            }}
          >
            <div
              class="mask"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                border: "2px solid black",
                padding: "6px",
              }}
            >
              <div
                className="row justify-content-center"
                style={{ width: "100vw" }}
              >
                <h1>Welcome to Medicine Shopping</h1>
              </div>
              <div className="container mt-5">
                <div className="row">
                  <div className="col">
                    <form>
                      <div
                        className="float-right"
                        style={{
                          width: "600px",
                          border: "2px solid black",
                          padding: "10px",
                        }}
                      >
                        <div
                          className="mb-3 row"
                          style={{ fontSize: "1.5rem" }}
                        >
                          <label
                            htmlFor="product Id"
                            className="col-sm-4 col-form-label"
                          >
                            Product ID:
                          </label><span className="required">*</span>
                          <div className="col-sm-5 ">
                            <input
                              type="number"
                              className="form-control form-control-sm"
                              ref={this.productId}
                              name="Id"
                              required
                            />
                          </div>
                        </div>

                        <div
                          className="mb-3 row"
                          style={{ fontSize: "1.5rem" }}
                        >
                          <label
                            htmlFor="product name"
                            className="col-sm-4 col-form-label"
                          >
                            Product Name:
                          </label><span className="required">*</span>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              ref={this.productName}
                              name="name"
                              required
                            />
                          </div>
                        </div>

                        <div
                          className="mb-3 row"
                          style={{ fontSize: "1.5rem" }}
                        >
                          <label
                            htmlFor="category"
                            className="col-sm-4 col-form-label"
                          >
                            Category:
                          </label><span className="required">*</span>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              ref={this.category}
                              name="domain"
                              required
                            />
                          </div>
                        </div>

                        <div
                          className="mb-3 row"
                          style={{ fontSize: "1.5rem" }}
                        >
                          <label
                            htmlFor="quantity"
                            className="col-sm-4 col-form-label"
                          >
                            Quantity:
                          </label><span className="required">*</span>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              ref={this.quantity}
                              name="location"
                              required
                            />
                          </div>
                        </div>

                        <div
                          className="mb-3 row"
                          style={{ fontSize: "1.5rem" }}
                        >
                          <label
                            htmlFor="price"
                            className="col-sm-4 col-form-label"
                          >
                            Price:
                          </label><span className="required">*</span>
                          <div className="col-sm-5">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              ref={this.price}
                              name="domain"
                              required
                            />
                          </div>
                        </div>

                        <div className="row mt-3">
                          <div className="col">
                            <button
                              className="btn btn-primary btn-xs"
                              onClick={this.add.bind(this)}
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsList: state.productList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: (newProduct) => {
      dispatch(actionCreators.addProduct(newProduct));
    },
    clearState: () => {
      dispatch(actionCreators.clearState());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddProduct));
