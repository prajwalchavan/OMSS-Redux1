import axios from "axios";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const ADD_USER = "ADD_USER";
export const CLEAR_STATE = "CLEAR_STATE";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const USER_LOGIN = "USER_LOGIN";
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_CART = "GET_CART";
export const GET_ORDER = "GET_ORDER";
export const GET_ORDER_BYID = "GET_ORDER_BYID";
export const PLACE_ORDER = "PLACE_ORDER";
export const CLEAR_ORDER = "CLEAR_ORDER";
export const GET_ERRORS = "GET_ERRORS";
export const CLEAN_ERRORS = "CLEAN_ERRORS";
// const BASE_URL = 'http://localhost:8080'

const clearOrderAction = () => {
  return {
    type: CLEAR_ORDER,
    // payload: data,
  };
};

export const clearOrder = (object) => {
  const { userId, productId, quant } = object;
  return (dispatch) => {
    axios
      .post(
        `http://localhost:8080/User/RemoveFromCart?userId=${userId}&productId=${productId}&quantity=${quant}`
      )
      .then(() => {
        dispatch(clearOrderAction());
        alert(`Product with ID ${userId} Deleted from Cart`);
      });
  };
};

const placedOrderAction = (data) => {
  return {
    type: PLACE_ORDER,
    payload: data,
  };
};

export const placedOrder = (object, callback) => (dispatch) => {
  const { uId, address, payment } = object;
  axios
    .post(
      `http://localhost:8080/User/PlaceOrder?userId=${uId}&deliveryAddress=${address}&payment=${payment}`
    )
    .then((response) => {
      dispatch(placedOrderAction(response.data));
      alert("Order Placed Sucessfully");
    })
    .catch((err) => console.log(err));
  return callback();
};

const getCartByIdAction = (data) => {
  return {
    type: GET_CART,
    payload: data,
  };
};

export const getCartById = (uId) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8080/User/ViewCart?&userId=${uId}`)
      .then((response) => {
        dispatch(getCartByIdAction(response.data));
      })
      .catch((err) => console.log(err));
  };
};

const addToCartAction = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const addToCart = (object) => {
  console.log(object);
  const { uId, id, qty } = object;
  return (dispatch) => {
    axios
      .post(
        `http://localhost:8080/User/AddToCart?userId=${uId}&productId=${id}&quantity=${qty}`
      )
      .then((response) => {
        console.log(response.data);
        alert(qty + " Products added to cart of user with id:" + id);
        dispatch(addToCartAction(response.data));
      });
  };
};

const userLoginAction = (data) => {
  return {
    type: USER_LOGIN,
    payload: data,
  };
};

export const userLogin = (object, history) => {
  console.log(object);
  const { UserLogin, Userpassword } = object;
  return (dispatch) => {
    axios
      .post(
        `http://localhost:8080/User/login?userId=${UserLogin}&password=${Userpassword}`
      )
      .then((response) => {
        history.push("/user");
        dispatch({ type: CLEAN_ERRORS });
        dispatch(userLoginAction(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERRORS, payload: err.response.data });
      });
  };
};

const getAllUsersAction = (data) => {
  return {
    type: GET_ALL_USERS,
    payload: data,
  };
};
export const getAllUsers = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/Admin/getAllUsers")
      .then((response) => {
        dispatch(getAllUsersAction(response.data));
      })
      .catch((err) => console.log(err));
  };
};

const getAllOrdersAction = (data) => {
  return {
    type: GET_ORDER,
    payload: data,
  };
};
export const getAllOrders = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/Admin/ViewAllOrders")
      .then((response) => {
        dispatch(getAllOrdersAction(response.data));
      })
      .catch((err) => console.log(err));
  };
};

const getAllOrdersByIdAction = (data) => {
  return {
    type: GET_ORDER_BYID,
    payload: data,
  };
};
export const getAllOrdersById = (object) => {
  const UserLogin = object;
  return (dispatch) => {
    axios
      .get(`http://localhost:8080//User/ViewMyOrders?userId=${UserLogin}`)
      .then((response) => {
        dispatch(getAllOrdersByIdAction(response.data));
      })
      .catch((err) => console.log(err));
  };
};

const getAllProductsAction = (data) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: data,
  };
};
export const getAllProducts = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:8080/getProducts")
      .then((response) => {
        dispatch(getAllProductsAction(response.data));
      })
      .catch((err) => console.log(err));
  };
};

const addUserAction = (data) => {
  return {
    type: ADD_USER,
    payload: data,
  };
};
export const addUser = (newUser, history) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/User/RegisterUser", newUser)
      .then((response) => {
        console.log(response.data);
        history.push("/");
        dispatch(addUserAction(response.data));
      });
  };
};

const addProductAction = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};
export const addProduct = (newProduct) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8080/Admin/ProductAdd", newProduct)
      .then((response) => {
        alert("Product Sucessfully added");
        console.log(response.data);
        dispatch(addProductAction(response.data));
      });
  };
};

//action to clear state
const clearStateAction = (data) => {
  return {
    type: CLEAR_STATE,
    payload: data,
  };
};

//clear state function
export const clearState = () => {
  return (dispatch) => {
    dispatch(clearStateAction());
  };
};
