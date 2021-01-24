import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreated from "../actions/actions";

class ViewProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
    };
    this.props.onGetProducts();
  }

  componentDidMount() {
    this.props.onGetProducts()
}

  static getDerivedStateFromProps(props, state) {
    if (props !== state) return { ...props };
    return null;
  }

  productList = () => {
    if (
      this.state.productsList !== [] &&
      this.state.productsList !== undefined
    ) {
      this.state.productsList.map((product) => {
        return (
          <tr key={product.productId}>
            <th>{product.productId}</th>
            <td>{product.productName}</td>
            <td>{product.category}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>
              <input type="text" placeholder="Enter quantity to buy"></input>
            </td>
            <td>
              <button>Add to Cart</button>
            </td>
          </tr>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <div className="trn-table-div">
          <h2>{this.props.returnedMessage}</h2>
          <table className="table table-info trn-table">
            <thead>
              <tr>
                <th scope="col">product ID</th>
                <th scope="col">product Name</th>
                <th scope="col">product Category</th>
                <th scope="col">product Quantity</th>
                <th scope="col">product Price</th>
              </tr>
            </thead>
            <tbody>{this.productList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsList: state.productsList,
    userObj: state.userObj,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProducts: () => {
      return dispatch(actionCreated.getAllProducts());
    },
    clearState: () => {
      return dispatch(actionCreated.clearState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProducts);
