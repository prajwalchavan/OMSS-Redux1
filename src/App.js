import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { ReactRouter } from "./Component/ReactRouter";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ReactRouter></ReactRouter>
      </div>
    </Provider>
  );
}

export default App;
