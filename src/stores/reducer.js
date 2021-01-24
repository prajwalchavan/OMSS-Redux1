import * as actionCreators from "../actions/actions";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionCreators.GET_ALL_USERS:
      let listOfUsers = action.data;
      return {
        ...state,
        usersList: listOfUsers,
      };

    case actionCreators.GET_ALL_PRODUCTS:
      let listOfProducts = action.data;
      return {
        ...state,
        productsList: listOfProducts,
      };

    case actionCreators.ADD_USER:
      let listAfterAddition = action.data.usersList;
      return {
        ...state,
        usersList: listAfterAddition,
      };
    case actionCreators.ADD_PRODUCT:
      let listAfterAdditionOfprdt = action.data;
      return {
        ...state,
        productsList: listAfterAdditionOfprdt,
      };
    case actionCreators.USER_LOGIN:
      const userObj = { ...action.data };
      return { ...state, userObj: userObj };
    case actionCreators.CLEAR_STATE:
      return {};
    default:
      return state;
  }
};

export default reducer;
