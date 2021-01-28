import { GET_ERRORS, CLEAN_ERRORS } from "../actions/actions";

const initialState = { error: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return { ...state, error: action.payload };
    case CLEAN_ERRORS:
      return {};
    default:
      return { ...state };
  }
};

export default reducer;
