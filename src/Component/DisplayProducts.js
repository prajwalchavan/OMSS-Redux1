import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllProducts } from "../actions/actions";
import PropTypes from 'prop-types';
import med from '../images/med.jpg';

class DisplayProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: [],
    };
    props.getAllProducts();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.states.productsList !== state.productsList) {
      return { productsList: props.states.productsList };
    }
    return null;
  }

  productList = () => {
    if (this.state.productsList !== undefined) {
      return this.state.productsList.map((element) => (
        <tr key={element.productId}>
          <td><b>{element.productId}</b></td>
          <td><b>{element.productName}</b></td>
          <td><b>{element.category}</b></td>
          <td><b>{element.quantity}</b></td>
          <td><b>{element.price}</b></td>
        </tr>
      ));
    }
  };
  render() {
    return (
      <body   style={{ backgroundImage:`url(${med})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '1000px'}}>
        <div>
        <div class="container-md">
          <h2>{this.props.returnedMessage}</h2>
          <center><h2>PRODUCTS</h2></center>
          <table class="table table-bordered table-hover">
            <thead  class="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col"> Name</th>
                <th scope="col"> Category</th>
                <th scope="col"> Quantity</th>
                <th scope="col"> Price</th>
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

DisplayProducts.propTypes={
    getAllProducts: PropTypes.func.isRequired,
    states : PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    states: state.states,
  };
};

export default connect(mapStateToProps, { getAllProducts })(DisplayProducts);