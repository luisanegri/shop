export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart(product, id) {
  return {
    type: 'ADD_TO_CART',
    payload: { product, id }
  };
}
