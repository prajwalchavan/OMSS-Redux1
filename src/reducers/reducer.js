import * as actionCreators from "../actions/actions";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCreators.GET_ALL_USERS:
      let listOfUsers = action.payload;
      return {
        ...state,
        usersList: listOfUsers,
      };

    case actionCreators.CLEAR_ORDER:
      return {
        ...state,
        ordersList: [],
      };

    case actionCreators.PLACE_ORDER:
      let placeOrder = action.payload;
      return {
        ...state,
        placedOrder: placeOrder,
      };

    case actionCreators.GET_ORDER:
      let listOfOrders = action.payload;
      return {
        ...state,
        ordersList: listOfOrders,
      };

    case actionCreators.GET_ORDER_BYID:
      let listOrders = action.payload;
      return {
        ...state,
        ordersList: listOrders,
      };

    case actionCreators.GET_ALL_PRODUCTS:
      let listOfProducts = action.payload;
      return {
        ...state,
        productsList: listOfProducts,
      };

    case actionCreators.GET_CART:
      let listOfCart = action.payload;
      return {
        ...state,
        cartList: listOfCart,
      };

    case actionCreators.ADD_USER:
      let listAfterAddition = action.payload;
      return {
        ...state,
        usersList: listAfterAddition,
      };
    case actionCreators.ADD_PRODUCT:
      let listAfterAdditionOfprdt = action.payload;
      return {
        ...state,
        productsList: listAfterAdditionOfprdt,
      };

    case actionCreators.ADD_TO_CART:
      let cartAfterAddingProducts = action.payload;
      return {
        ...state,
        productsInCart: cartAfterAddingProducts,
      };

    case actionCreators.USER_LOGIN:
      const userObj = { ...action.payload };
      return { ...state, userObj: userObj };

    case actionCreators.CLEAR_STATE:
      return {};

    default:
      return state;
  }
};

export default reducer;
