import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../actions/actions";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.userId = React.createRef();
    this.firstName = React.createRef();
    this.lastName = React.createRef();
    this.password = React.createRef();
    this.mailId = React.createRef();
    this.mobileNo = React.createRef();
    this.address = React.createRef();
  }
  componentDidMount() {
    this.props.clearState();
  }
  
  add(e) {
    e.preventDefault();
    let newUser = {
      userId: this.userId.current.value,
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      password: this.password.current.value,
      mailId: this.mailId.current.value,
      mobileNo: this.mobileNo.current.value,
      address: this.address.current.value,
    };
    console.log(newUser)
    this.props.onAddUser(newUser);
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3 row">
                <label htmlFor="first-name" className="col-sm-4 col-form-label">
                  User ID:
                </label>
                <div className="col-sm-5 ">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    ref={this.userId}
                    name="Id"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="last-name" className="col-sm-4 col-form-label">
                  First Name:
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.firstName}
                    name="name"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="last-name" className="col-sm-4 col-form-label">
                  Last Name:
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.lastName}
                    name="domain"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="phoneno" className="col-sm-4 col-form-label">
                  Password:
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.password}
                    name="location"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="last-name" className="col-sm-4 col-form-label">
                  Mail ID:
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.mailId}
                    name="domain"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="last-name" className="col-sm-4 col-form-label">
                  Mobile Number:
                </label>
                <div className="col-sm-5">
                  <input
                    type="number"
                    className="form-control form-control-sm"
                    ref={this.mobileNo}
                    name="domain"
                    required
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="last-name" className="col-sm-4 col-form-label">
                  Address:
                </label>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    ref={this.address}
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
      usersList:state.usersList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUser: (newUser) => {
      dispatch(actionCreators.addUser(newUser));
    },
    clearState: () => {
      dispatch(actionCreators.clearState());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddUser));
