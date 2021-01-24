import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreated from "../actions/actions";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AdminLogin: "",
      Adminpassword: "",
      UserLogin: "",
      Userpassword: "",
    };
  }

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  go() {
    console.log(this.props);
    this.props.history.push("/");
  }

  adminLogin = () => {
    const { AdminLogin, Adminpassword } = this.state;
    if (AdminLogin === "admin" && Adminpassword === "admin") {
      this.props.history.push("/admin");
    } else {
      alert("Enter valid credentials");
    }
  };

  userLogin = () => {
    const { UserLogin, Userpassword } = this.state;
    this.props.userLogin({ UserLogin, Userpassword }, this.props.history);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <h1>Welcome to Medicine Shopping</h1>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col">
            <div className="row justify-content-center">
              <h3>Admin Login</h3>
            </div>
            <div className="row justify-content-center">
              <input
                onChange={this.handleChange}
                style={{ width: "30vw" }}
                type="text"
                class="form-control"
                id="login"
                name="AdminLogin"
                placeholder="login"
              />
            </div>
            <br />
            <div className="row justify-content-center">
              <input
                onChange={this.handleChange}
                style={{ width: "30vw" }}
                type="password"
                class="form-control"
                id="password"
                name="Adminpassword"
                placeholder="Password"
              />
            </div>
            <br />
            <div className="row justify-content-center">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={this.adminLogin}
              >
                Login
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-center">
              <h3>User Login</h3>
            </div>
            <div className="row justify-content-center">
              <input
                onChange={this.handleChange}
                style={{ width: "30vw" }}
                type="text"
                class="form-control"
                id="login"
                name="UserLogin"
                placeholder="login"
              />
            </div>
            <br />
            <div className="row justify-content-center">
              <input
                onChange={this.handleChange}
                style={{ width: "30vw" }}
                type="password"
                class="form-control"
                id="password"
                name="Userpassword"
                placeholder="password"
              />
            </div>
            <br />
            <div className="row justify-content-center">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={this.userLogin}
              >
                Login
              </button>
            </div>
            <div className="row justify-content-center">
              New User? Register.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userObj: state.userObj,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (object, history) => {
      return dispatch(actionCreated.userLogin(object, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
