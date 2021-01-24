import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    // window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_() // Remove after done with development
  )
);

export default store;
