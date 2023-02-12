import axios from "axios";
import { base_url, live_url } from "../../utils/api";
import {
  ADMIN_LOGIN_ERROR,
  ADMIN_LOGIN_LOADING,
  ADMIN_LOGIN_SUCCESSFULL,
} from "./admin.types";

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const signinAdmin = (creds) => async (dispatch) => {
  dispatch({ type: ADMIN_LOGIN_LOADING });
  try {
    let res = await axios.post(`${live_url}/admin/signin`, creds);
    return dispatch({
      type: ADMIN_LOGIN_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({
      type: ADMIN_LOGIN_ERROR,
      payload: err.response.data.message,
    });
  }
};
