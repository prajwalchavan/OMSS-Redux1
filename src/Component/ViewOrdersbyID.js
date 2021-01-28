import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllOrdersById, userLogin } from "../actions/actions";
import PropTypes from "prop-types";

class ViewOrdersbyID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersList: [],
      userLogin: props.states.userObj.userId,
    };
    props.getAllOrdersById(this.state.userLogin);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.states.ordersList !== state.ordersList) {
      return { ordersList: props.states.orderList };
    }
    return null;
  }

  ordersList = () => {
    if (
      this.props.states.ordersList === undefined ||
      this.props.states.ordersList === null ||
      this.props.states.ordersList === []
    ) {
      return null;
    } else {
      console.log(this.props.states.ordersList);
      return this.props.states.ordersList.map((element) => (
        <tr key={element.orderId}>
          <td>{element.orderId}</td>
          <td>{element.userId}</td>
          <td>{element.orderDate}</td>
          <td>{element.deliveryAddress}</td>
          <td style={{ textAlign: "left" }}>{element.listOfProducts}</td>
          <td>{element.totalAmount}</td>
          <td>{element.orderStatus}</td>
        </tr>
      ));
    }
  };

  render() {
    return (
      <div
        id="intro-example"
        className="p-2 text-center bg-image"
        style={{
          backgroundColor: "rgb(240,248,255)",
          height: "40vw",
          backgroundImage:
            "url('https://ak.picdn.net/shutterstock/videos/4775624/thumb/7.jpg')",
        }}
      >
        <br />
        <h1>
          <p
            className="text-uppercase"
            style={{ color: "black", textAlign: "center" }}
          >
            My Orders
          </p>
        </h1>
        <div>
          <div className="trn-table-div">
            <h2>{this.props.returnedMessage}</h2>
            <center>
            <table
              className="table table-striped table-dark"
              border="5"
              style={{ width: "85%", textAlign: "center", opacity: 0.9 }}
            >
              <thead>
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">User Id</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">Delivery Address</th>
                  <th scope="col">Products</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>{this.ordersList()}</tbody>
            </table>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

ViewOrdersbyID.propTypes = {
  getAllOrdersById: PropTypes.func.isRequired,
  userLogin: PropTypes.func.isRequired,
  states: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    states: state.states,
  };
};

export default connect(mapStateToProps, { getAllOrdersById, userLogin })(
  ViewOrdersbyID
);
