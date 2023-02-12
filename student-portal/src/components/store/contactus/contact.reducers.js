import {
  ADD_QUIERIES_SUCCESSFULL,
  GET_QUIERIES_SUCCESSFULL,
  QUIERIES_ERROR,
  QUIERIES_LOADING,
  UPDATE_QUIERIES_SUCCESSFULL,
} from "./contact.types";

const initState = {
  loading: false,
  error: false,
  data: [],
};

export const contactReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case QUIERIES_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case QUIERIES_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_QUIERIES_SUCCESSFULL: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case ADD_QUIERIES_SUCCESSFULL: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, payload.user],
      };
    }
    case UPDATE_QUIERIES_SUCCESSFULL: {
      
      const newData = state.data.data.map((item) => {
        if (item.id == payload.user._id) {
          return payload.user;
        } else {
          return item;
        }
      });
      return {
        ...state,
        loading: false,
        error: false,
        data: newData,
      };
    }
    default: {
      return state;
    }
  }
};
