export const SEARCH = 'SEARCH';

export default function searchProducts(query, products) {
  return {
    type: SEARCH,
    payload: { query, products }
  };
}
