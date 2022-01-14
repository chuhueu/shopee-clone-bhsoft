import {
  GET_BRAND_FAILURE,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_DETAIL_PRODUCT_FAILURE,
  GET_DETAIL_PRODUCT_REQUEST,
  GET_DETAIL_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAILURE,
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
} from "../constants/productConstants";

interface brandInfo {
  _id?: string;
  name?: string;
  image?: string;
  content?: any;
}

export interface brandState {
  brandInfo?: brandInfo | null;
  isFetching?: boolean;
  error?: boolean;
}

interface productInfo {
  _id?: string;
  name: string;
  image: Array<string>;
  price: number;
  sold: number;
  inStock: number;
  discount: number;
  desc: string;
  numReviews: number;
  category?: string;
  brand?: string;
  review: Array<Type>;
}
interface Type {
  rateStar?: number;
  comment?: string;
  user?: string;
}

export interface productState {
  productInfo?: Array<productInfo>;
  isFetching?: boolean;
  error?: boolean;
}

export interface detailProductState {
  productInfo?: productInfo;
  isFetching?: boolean;
  error?: boolean;
}

interface Action {
  type: string;
  payload: string;
}

export const brandReducer = (state: brandInfo, action: Action) => {
  switch (action.type) {
    case GET_BRAND_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case GET_BRAND_SUCCESS:
      return {
        brandInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case GET_BRAND_FAILURE:
      return {
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const listProductReducer = (state: productInfo, action: Action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case GET_LIST_PRODUCT_SUCCESS:
      return {
        productInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case GET_LIST_PRODUCT_FAILURE:
      return {
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const detailProductReducer = (
  state: detailProductState,
  action: Action
) => {
  switch (action.type) {
    case GET_DETAIL_PRODUCT_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case GET_DETAIL_PRODUCT_SUCCESS:
      return {
        productInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case GET_DETAIL_PRODUCT_FAILURE:
      return {
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};