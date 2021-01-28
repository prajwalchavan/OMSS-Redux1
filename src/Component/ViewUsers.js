import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/actions";
import PropTypes from "prop-types";
import user from "../images/user.jpg";

class ViewUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersList: [],
    };
    props.getAllUsers();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.states.usersList !== state.usersList) {
      return { usersList: props.states.usersList };
    }
    return null;
  }

  userList = () => {
    if (this.state.usersList !== undefined) {
      return this.state.usersList.map((user) => (
        <tr key={user.userId}>
          <th>{user.userId}</th>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.password}</td>
          <td>{user.mailId}</td>
          <td>{user.mobileNo}</td>
          <td>{user.address}</td>
        </tr>
      ));
    }
  };

  render() {
    return (
      <body
        style={{
          backgroundImage: `url(${user})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "1000px",
        }}
      >
        <div>
          <div className="trn-table-div">
            <h2>{this.props.returnedMessage}</h2>
            <center>
              <h2>USER LIST</h2>
            </center>
            <table class="table table-bordered table-hover">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">user ID</th>
                  <th scope="col">user FirstName</th>
                  <th scope="col">user LastName</th>
                  <th scope="col">user Password</th>
                  <th scope="col">user Mail ID</th>
                  <th scope="col">user Mobile No</th>
                  <th scope="col">user Address</th>
                </tr>
              </thead>
              <tbody>{this.userList()}</tbody>
            </table>
          </div>
        </div>
      </body>
    );
  }
}

ViewUsers.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  states: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    states: state.states,
  };
};

export default connect(mapStateToProps, { getAllUsers })(ViewUsers);
