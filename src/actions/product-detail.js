import superagent from 'superagent';

export const SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS';

// synchronous action
export function setProductsDetails(product) {
  return {
    type: 'SET_PRODUCTS_DETAILS',
    payload: product
  };
}

// FETCH
// Async action, which dispatches a synchronous action when it has fetched the data
export function getProductDetail(productId) {
  return function(dispatch) {
    superagent(`http://localhost:3010/products/${productId}`)
      .then(response => response.body)
      .then(product => {
        dispatch(setProductsDetails(product));
      });
  };
}