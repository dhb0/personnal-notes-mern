import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    await axios
      .get("products")
      .then((response) =>
        dispatch({
          type: "FETCH_PRODUCTS",
          payload: response.data,
        })
      )
      .catch((err) => {
        return dispatch({
          type: "FETCH_PRODUCTS_FAIL",
          payload: err,
        });
      });
  };
};
