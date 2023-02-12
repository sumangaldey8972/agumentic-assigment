import axios from "axios";
import { base_url, live_url } from "../../utils/api";
import {
  HOMEPAGE_ERROR,
  HOMEPAGE_BANNER_IMAGE_GET_SUCCESSFULL,
  HOMEPAGE_LOADING,
  HOMEPAGE_BANNER_IMAGE_SUCCESSFULL,
  HOMEPAGE_BANNER_IMAGE_UPDATE_SUCCESSFULL,
  STUDENT_HEADLINE_ADD_SUCCESSFULL,
  STUDENT_HEADLINE_UPDATE_SUCCESSFULL,
  STUDENT_HEADLINE_GET_SUCCESSFULL,
  PRODUCT_ADD_SUCCESSFULL,
  PRODUCT_UPDATE_SUCCESSFULL,
  PRODUCT_GET_SUCCESSFULL,
  PRODUCT_DELETE_SUCCESSFULL,
} from "./home.types";

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const getImage = () => async (dispatch) => {
  dispatch({ type: HOMEPAGE_LOADING });
  try {
    let res = await axios.get(`${live_url}/home/mainbanner`);
    return dispatch({
      type: HOMEPAGE_BANNER_IMAGE_GET_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const imageUpload = (url) => async (dispatch) => {
  dispatch({ type: HOMEPAGE_LOADING });
  try {
    let res = await axios.post(`${live_url}/home/mainbanner`, {
      imageurl: url,
    });
    return dispatch({
      type: HOMEPAGE_BANNER_IMAGE_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({
      type: HOMEPAGE_ERROR,
      payload: err.response.data.message,
    });
  }
};

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const imageUpdate = (id, url) => async (dispatch) => {
  dispatch({
    type: HOMEPAGE_LOADING,
  });
  try {
    let res = await axios.patch(`${live_url}/home/updatemainbanner/${id}`, {
      imageurl: url,
    });

    return dispatch({
      type: HOMEPAGE_BANNER_IMAGE_UPDATE_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({
      type: HOMEPAGE_ERROR,
      payload: err.response.data.message,
    });
  }
};

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const getText = () => async (dispatch) => {
  dispatch({ type: HOMEPAGE_LOADING });
  try {
    let res = await axios.get(`${live_url}/home/supportheadline`);
    return dispatch({
      type: STUDENT_HEADLINE_GET_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const headlineAdd = (text) => async (dispatch) => {
  dispatch({ type: HOMEPAGE_LOADING });
  try {
    let res = await axios.post(`${live_url}/home/supportheadline`, {
      text: text,
    });
    return dispatch({
      type: STUDENT_HEADLINE_ADD_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({
      type: HOMEPAGE_ERROR,
      payload: err.response.data.message,
    });
  }
};

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const headlineUpdate = (id, text) => async (dispatch) => {
  dispatch({ type: HOMEPAGE_LOADING });
  try {
    let res = await axios.patch(`${live_url}/home/supportheadline/${id}`, {
      text: text,
    });

    return dispatch({
      type: STUDENT_HEADLINE_UPDATE_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({
      type: HOMEPAGE_ERROR,
      payload: err.response.data.message,
    });
  }
};

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const getProduct = () => async (dispatch) => {
  try {
    let res = await axios.get(`${live_url}/home/product`);
    return dispatch({
      type: PRODUCT_GET_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const productAdd = (products) => async (dispatch) => {
  dispatch({ type: HOMEPAGE_LOADING });
  try {
    let res = await axios.post(`${live_url}/home/product`, products);
    return dispatch({
      type: PRODUCT_ADD_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({
      type: HOMEPAGE_ERROR,
      payload: err.response,
    });
  }
};

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const productUpdate = (id, products) => async (dispatch) => {
  dispatch({ type: HOMEPAGE_LOADING });
  try {
    let res = await axios.put(`${live_url}/home/product/${id}`, products);

    return dispatch({
      type: PRODUCT_UPDATE_SUCCESSFULL,
      payload: res.data,
    });
  } catch (err) {
    return dispatch({
      type: HOMEPAGE_ERROR,
    });
  }
};

// working fine, incase any error occured please change live_url to base_url and kindly run locally
export const productDelete = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`${live_url}/home/product/${id}`);
    return dispatch({
      type: PRODUCT_DELETE_SUCCESSFULL,
      payload: { id: id, message: res.data.message },
    });
  } catch (err) {
    return dispatch({
      type: HOMEPAGE_ERROR,
    });
  }
};
