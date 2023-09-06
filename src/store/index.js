import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

const message = (state = [], action) => {
  if (action.type === "SET_MESSAGE") {
    return action.message;
  }
  return state;
};

export const fetchMessage = () => {
  return async (dispatch) => {
    const { data } = await axios.get("https://multi-server-test.onrender.com/apis/app4");
    console.log(data);
    dispatch({ type: "SET_MESSAGE", message: data });
  };
};

const reducer = combineReducers({
  message,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
