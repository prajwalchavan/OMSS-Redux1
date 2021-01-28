import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreated from "../actions/actions";
import { HiUserCircle } from "react-icons/hi";

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
      <div class="text-white">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div
            id="intro-example"
            className="p-5 text-center bg-image"
            style={{
              backgroundImage:
                "url('https://wi.wallpapertip.com/wsimgs/150-1504190_medicine-wallpapers-hd-for-desktop-medicine-background.jpg')",
              backgroundSize: "100%",
              width: "100vw",
            }}
          >
            <div class="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
              <br />
              <div className="row justify-content-center">
                <h1>Welcome to Medicine Shopping</h1>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <table
                    style={{
                      width: "35vw",
                      height: "26vw",
                      borderBlockColor: "black",
                    }}
                  >
                    <HiUserCircle size="7rem" />
                    <br />
                    <div className="row justify-content-center">
                      <h3>Admin Login</h3>
                    </div>
                    <br />
                    <div className="row justify-content-center">
                      <input
                        onChange={this.handleChange}
                        style={{ width: "30vw" }}
                        type="text"
                        class="form-control"
                        id="login"
                        name="AdminLogin"
                        placeholder="Username"
                      />
                    </div>
                    <br />
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
                        class="btn btn-outline-light"
                        onClick={this.adminLogin}
                      >
                        Login
                      </button>
                    </div>
                  </table>
                </div>
                <div className="row">
                  <table
                    style={{
                      width: "35vw",
                      height: "26vw",
                      borderBlockColor: "black",
                    }}
                  >
                    <HiUserCircle size="7rem" />
                    <br />
                    <div className="row justify-content-center">
                      <h3>User Login</h3>
                    </div>
                    <br />
                    <div className="row justify-content-center">
                      <input
                        onChange={this.handleChange}
                        style={{ width: "30vw" }}
                        type="text"
                        class="form-control"
                        id="login"
                        name="UserLogin"
                        placeholder="UserID"
                      />
                    </div>
                    <br />
                    <br />
                    <div className="row justify-content-center">
                      <input
                        onChange={this.handleChange}
                        style={{ width: "30vw" }}
                        type="password"
                        class="form-control"
                        id="password"
                        name="Userpassword"
                        placeholder="Password"
                      />
                    </div>
                    <br />
                    <div className="row justify-content-center">
                      <button
                        type="submit"
                        class="btn btn-outline-light"
                        onClick={this.userLogin}
                      >
                        Login
                      </button>
                    </div>
                    <div className="row justify-content-center">
                      <a href="/user/addUser">New User? Register.</a>
                    </div>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    states: state.states,
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
