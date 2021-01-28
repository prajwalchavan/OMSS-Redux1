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
    this.history = this.props.history;
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
    console.log(newUser);
    this.props.onAddUser(newUser, this.history);
    alert("User Added Successfully");
  }

  render() {
    return (
      <center>
        <div
          id="intro-example"
          className="p-2 text-center bg-image"
          style={{
            backgroundColor: "azure",
            height: "45vw",
            width: "70vw",
            backgroundImage:
              "url('https://store.hp.com/app/assets/images/uploads/prod/25-best-hd-wallpapers-laptops159561982840438.jpg?impolicy=prdimg&imdensity=1&imwidth=1000')",
          }}
        >
          <div className="row">
            <div className="col">
              <h1>
                <p
                  className="text-uppercase"
                  style={{ color: "Blue", textAlign: "center" }}
                >
                  User Registration
                </p>
              </h1>
              <br />
              <center>
                <form onSubmit={this.add.bind(this)}>
                  <table
                    className="table table-striped table-dark"
                    border="5"
                    style={{ width: "60%", textAlign: "center", opacity: 0.8 }}
                  >
                    <br />
                    <div className="mb-3 row">
                      <label
                        htmlFor="first-name"
                        className="col-sm-4 col-form-label"
                      >
                        User ID:
                      </label>
                      <span className="required">*</span>

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
                      <label
                        htmlFor="last-name"
                        className="col-sm-4 col-form-label"
                      >
                        First Name:
                      </label>
                      <span className="required">*</span>
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
                      <label
                        htmlFor="last-name"
                        className="col-sm-4 col-form-label"
                      >
                        Last Name:
                      </label>
                      <span className="required">*</span>
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
                      <label
                        htmlFor="phoneno"
                        className="col-sm-4 col-form-label"
                      >
                        Password:
                      </label>
                      <span className="required">*</span>
                      <div className="col-sm-5">
                        <input
                          type="password"
                          className="form-control form-control-sm"
                          ref={this.password}
                          name="location"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        htmlFor="last-name"
                        className="col-sm-4 col-form-label"
                      >
                        Mail ID:
                      </label>
                      <span className="required">*</span>
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
                      <label
                        htmlFor="last-name"
                        className="col-sm-4 col-form-label"
                      >
                        Mobile Number:
                      </label>
                      <span className="required">*</span>
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
                      <label
                        htmlFor="last-name"
                        className="col-sm-4 col-form-label"
                      >
                        Address:
                      </label>
                      <span className="required">*</span>
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
                  </table>

                  <div className="row mt-3">
                    <div className="col">
                      <button
                        type="submit"
                        className="btn btn-primary btn-md rounded-pill"
                        onClick={this.clickHandler}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </center>
            </div>
          </div>
          <footer
            style={{
              position: "fixed",
              bottom: 1,
              width: "95%",
              height: "6%",
              left: "2%",
              backgroundColor: "rgb(143, 93, 239)",
              color: "white",
            }}
          >
            Register Yourself
          </footer>
          <br></br>
          <br></br>
        </div>
      </center>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersList: state.usersList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUser: (newUser, history) => {
      dispatch(actionCreators.addUser(newUser, history));
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
