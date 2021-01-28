import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProducts } from "../actions/actions";
import { addToCart } from "../actions/actions";
import PropTypes from "prop-types";
import med from "../images/med.jpg";

class ViewProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
      quantities: {},
    };
    props.getAllProducts();
  }

  handleChange = (event) => {
    const val = parseInt(event.target.value);
    this.setState(
      {
        quantities: { ...this.state.quantities, [event.target.name]: val },
      },
      () => console.log(this.state.quantities)
    );
  };
  static getDerivedStateFromProps(props, state) {
    if (props.states.productsList !== state.productsList) {
      return { productsList: props.states.productsList };
    }
    if (props.states.userObj !== state.userObj) {
      return { userObj: props.states.userObj };
    }
    return null;
  }

  handleSubmit = (id) => {
    const uId = this.props.states.userObj.userId;
    this.props.states.productsList
      .filter((e) => e.productId === id)
      .map((e) => {
        const qty = this.state.quantities[e.productId];
        if (qty > 0) this.props.addToCart({ uId, id, qty });
        else console.log("false");
      });
  };
  productList = () => {
    if (this.state.productsList !== undefined) {
      return this.state.productsList.map((element) => (
        <tr key={element.productId}>
          <td>{element.productId}</td>
          <td>{element.productName}</td>
          <td>{element.category}</td>
          <td>{element.quantity}</td>
          <td>{element.price}</td>
          <td>
            <input
              className="form-control"
              name={element.productId}
              type="number"
              placeholder="Enter Quantity"
              onChange={this.handleChange}
            ></input>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.handleSubmit(element.productId)}
            >
              Add To Cart
            </button>
          </td>
        </tr>
      ));
    }
  };

  render() {
    return (
      <body
        style={{
          backgroundImage: `url(${med})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "1000px",
        }}
      >
        <div>
          <div className="trn-table-div p-2 text-center">
            <h2>{this.props.returnedMessage}</h2>
            <center>
              <h2>PRODUCTS</h2>
            </center>
            <table class="table table-bordered table-hover">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID:</th>
                  <th scope="col">Name:</th>
                  <th scope="col">Category:</th>
                  <th scope="col">Quantity:</th>
                  <th scope="col">Price:</th>
                  <th scope="col">Order quantity:</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>{this.productList()}</tbody>
            </table>
          </div>
        </div>
      </body>
    );
  }
}

ViewProducts.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  states: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    states: state.states,
  };
};

export default connect(mapStateToProps, { getAllProducts, addToCart })(
  ViewProducts
);
