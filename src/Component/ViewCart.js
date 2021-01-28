import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { getCartById, placedOrder, clearOrder } from "../actions/actions";
import PropTypes from "prop-types";
import cart from "../images/cart.jpg";

class ViewCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
      uId: props.states.userObj.userId,
    };
    props.getCartById(this.state.uId);
  }
  static getDerivedStateFromProps(props, state) {
    if (props.states.userObj.userId !== state.uId) {
      return { uId: props.states.userObj.userId };
    }
    if (props.states.cartList !== state.cartList) {
      return { cartList: props.states.cartList };
    }
    if (props.states.userObj !== state.userObj) {
      return { userObj: props.states.userObj };
    }
    return null;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDelete = (userId, productId, quant) => {
    this.props.clearOrder({ userId, productId, quant });
  };

  cartList = () => {
    if (
      this.state.cartList !== undefined &&
      this.state.cartList !== null &&
      this.state.cartList !== []
    ) {
      return this.state.cartList
        .filter((cart) => cart.quantity > 0)
        .map((cart) => (
          <tr key={cart.cartId}>
            <th>{cart.cartId}</th>
            <td>{cart.productId}</td>
            <td>{cart.productName}</td>
            <td>{cart.quantity}</td>
            <td>{cart.totalAmount}</td>
            <td>
              {" "}
              <button
                type="button"
                class="btn btn-danger"
                onClick={() =>
                  this.handleDelete(
                    this.state.uId,
                    cart.productId,
                    cart.quantity
                  )
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ));
    }
    return null;
  };

  placeOrder = () => {
    const payment = true;
    const uId = this.state.uId;
    const address = this.state.address;
    this.props.placedOrder({ uId, address, payment }, () =>
      this.props.getCartById(this.props.states.userObj.userId)
    );
  };

  render() {
    return (
      <body
        style={{
          backgroundImage: `url(${cart})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "1000px",
        }}
      >
        <div>
          <h1>
            <center>
              <p className="text-uppercase">Cart Details</p>
            </center>
          </h1>
          <div className="trn-table-div container-md">
            <h2>{this.props.returnedMessage}</h2>
            <table className="table table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Cart ID</th>
                  <th scope="col">Product ID</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Quantity</th>
                  <th scope="col">Total Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{this.cartList()}</tbody>
            </table>
            <div className="form-group">
              <label className="address">Enter Delivery address:</label>
              <span className="required">*</span>
              <br />
              <input
                name="address"
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Address"
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <button
                type="button"
                class="btn btn-warning"
                onClick={this.placeOrder}
              >
                Place Order
              </button>
            </div>
            <br />
          </div>
        </div>
      </body>
    );
  }
}
ViewCart.propTypes = {
  getCartById: PropTypes.func.isRequired,
  placedOrder: PropTypes.func.isRequired,
  clearOrder: PropTypes.func.isRequired,
  states: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    states: state.states,
  };
};

export default connect(mapStateToProps, {
  getCartById,
  placedOrder,
  clearOrder,
})(ViewCart);
