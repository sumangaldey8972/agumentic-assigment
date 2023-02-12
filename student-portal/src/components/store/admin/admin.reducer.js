import {
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGIN_LOADING,
  ADMIN_LOGIN_SUCCESSFULL,
  ADMIN_LOGOUT_SUCCESSFULL,
} from "./admin.types";
let username = localStorage.getItem("username") || "";
const initState = {
  loading: false,
  error: false,
  data: [],
  username: username,
  auth: false
};

export const adminReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADMIN_LOGIN_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case ADMIN_LOGIN_SUCCESSFULL: {
      localStorage.setItem("username", payload.admin);
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
        username : payload.admin,
        auth: true
      };
    }
    case ADMIN_LOGOUT_SUCCESSFULL: {
      localStorage.removeItem("username");
      return {
        ...state,
        loading: false,
        error: false,
        username:"",
        auth: false
      };
    }
    default: {
      return state;
    }
  }
};
