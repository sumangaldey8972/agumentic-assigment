import {
  ADD_QUIERIES_SUCCESSFULL,
  GET_QUIERIES_SUCCESSFULL,
  QUIERIES_ERROR,
  UPDATE_QUIERIES_SUCCESSFULL,
} from "./contact.types";
import axios from "axios";
import { base_url, live_url } from "../../utils/api";

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const getQueries = () => async (dispatch) => {
  try {
    let res = await axios.get(`${live_url}/contact/get`);
    return dispatch({
      type: GET_QUIERIES_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({
      type: QUIERIES_ERROR,
    });
  }
};

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const addQueries = (message) => async (dispatch) => {
  try {
    let res = await axios.post(`${live_url}/contact/create`, message);
    console.log("add res", res);
    return dispatch({
      type: ADD_QUIERIES_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    console.log("err res", err);
    return dispatch({
      type: QUIERIES_ERROR,
      payload: err.response.data.message,
    });
  }
};

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const updateQueires = (id) => async (dispatch) => {
  try {
    let res = await axios.put(`${live_url}/contact/update/${id}`);
    
    return dispatch({
      type: UPDATE_QUIERIES_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({
      type: QUIERIES_ERROR,
      payload: err.response,
    });
  }
};
