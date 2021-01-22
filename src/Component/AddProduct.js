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
    console.log(newProduct)
    this.props.onAddProduct(newProduct);
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3 row">
                <label htmlFor="first-name" className="col-sm-4 col-form-label">
                  Product ID:
                </label>
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

              <div className="mb-3 row">
                <label htmlFor="last-name" className="col-sm-4 col-form-label">
                  Product Name:
                </label>
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

              <div className="mb-3 row">
                <label htmlFor="last-name" className="col-sm-4 col-form-label">
                  Category:
                </label>
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

              <div className="mb-3 row">
                <label htmlFor="phoneno" className="col-sm-4 col-form-label">
                  Quantity:
                </label>
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

              <div className="mb-3 row">
                <label htmlFor="last-name" className="col-sm-4 col-form-label">
                  Price:
                </label>
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
                    className="btn btn-primary btn-sm"
                    onClick={this.add.bind(this)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <br></br>
        <br></br>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      productsList:state.productList,
  }
}

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
