import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import logger from 'redux-logger';
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export {
    store,
};