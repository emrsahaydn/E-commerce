import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
} from "./productActionTypes";

// Categories
export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

// Product List
export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});

// Total product count
export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

// Fetch State
export const setFetchState = (state) => ({
  type: SET_FETCH_STATE,
  payload: state,
});

// Pagination Limit
export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

// Pagination Offset
export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

// Product Filter
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
