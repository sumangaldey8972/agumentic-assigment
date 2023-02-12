import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./admin/admin.reducer";
import { contactReducer } from "./contactus/contact.reducers";
import { homepageReducer } from "./HomePage/home.reducers";

const root_reducer = combineReducers({
  admin: adminReducer,
  home: homepageReducer,
  contact: contactReducer
});

export const store = legacy_createStore(root_reducer, applyMiddleware(thunk));
