import {createStore, applyMiddleware,} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import converterReducer from './reducers/converterReducer';
import {combineReducers} from "@reduxjs/toolkit";

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(
    createStore
);

const rootReducer = combineReducers({
    converterReducer: converterReducer
})

const store = createStoreWithMiddleware(rootReducer)
export type RootState = ReturnType<typeof rootReducer>;
export default store;