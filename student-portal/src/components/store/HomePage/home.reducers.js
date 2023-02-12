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
  PRODUCT_GET_SUCCESSFULL,
  PRODUCT_UPDATE_SUCCESSFULL,
  PRODUCT_DELETE_SUCCESSFULL,
} from "./home.types";

const initState = {
  loading: false,
  error: false,
  data: [],
  headlineData: [],
  product: [],
};

export const homepageReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case HOMEPAGE_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case HOMEPAGE_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case HOMEPAGE_BANNER_IMAGE_SUCCESSFULL: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case HOMEPAGE_BANNER_IMAGE_GET_SUCCESSFULL: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case HOMEPAGE_BANNER_IMAGE_UPDATE_SUCCESSFULL: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case STUDENT_HEADLINE_GET_SUCCESSFULL: {
      return {
        ...state,
        loading: false,
        error: false,
        headlineData: payload,
      };
    }
    case STUDENT_HEADLINE_ADD_SUCCESSFULL: {
      return {
        ...state,
        loading: false,
        error: false,
        headlineData: payload,
      };
    }
    case STUDENT_HEADLINE_UPDATE_SUCCESSFULL: {
      return {
        ...state,
        loading: false,
        error: false,
        headlineData: payload,
      };
    }
    case PRODUCT_GET_SUCCESSFULL: {
      return {
        ...state,
        loading: false,
        error: false,
        product: payload,
      };
    }
    case PRODUCT_ADD_SUCCESSFULL: {
      return {
        ...state,
        loading: false,
        error: false,
        product: [...state.product, payload.products],
      };
    }
    case PRODUCT_UPDATE_SUCCESSFULL: {
      const newProduct = state.product.products.map((item) => {
        if (item.id == payload.product._id) {
          return payload.product;
        } else {
          return item;
        }
      });
      return {
        ...state,
        loading: false,
        error: false,
        product: newProduct,
      };
    }
    case PRODUCT_DELETE_SUCCESSFULL: {
      const newItem = state.product.products.map(
        (item) => item.id != payload.id
      );
      return {
        ...state,
        loading: false,
        error: false,
        product: newItem,
      };
    }
    default: {
      return state;
    }
  }
};
