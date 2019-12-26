import { createStore, applyMiddleware, compose } from "redux";
import AllReducers from "../reducers/AllReducers";
import thunk from "redux-thunk";

const Store = createStore(
  AllReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default Store;
