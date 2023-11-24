import { ActionTypes } from "../Constants/ActionTypes";

const initialState = {
  products: [],
};

function ProductReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
}

function selectedProductReducer(state = {}, { type, payload }) {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
}

export { ProductReducer, selectedProductReducer };
