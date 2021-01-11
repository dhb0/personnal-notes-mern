import axios from "axios";

export const registerUser = (user) => {
  return async (dispatch) => {
    await axios
      .post("/auth/register", user)
      .then((response) =>
        dispatch({
          type: "REGISTER_USER",
          payload: response.data,
        })
      )
      .catch((err) => {
        return dispatch({
          type: "REGISTER_FAIL",
          payload: err,
        });
      });
  };
};

export const loginUser = (user) => {
  return async (dispatch) => {
    await axios
      .post("/auth/login", user)
      .then((response) =>
        dispatch({
          type: "LOGIN_USER",
          payload: response.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: "LOGIN_FAIL",
          payload: err,
        })
      );
  };
};

export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};


export const logoutUser = () => {
  return {
    type: "LOGOUT_USER"
  }
}