export const productsReducer = (
  state = {
    loading: true,
    data: [],
  },
  { type, payload }
) => {
  switch (type) {
    case "FETCH_PRODUCTS":
      return { ...state, loading: false, data: payload };
    default:
      return state;
  }
};
