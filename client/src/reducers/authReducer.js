import { setAuthorizationToken } from "../helpers/setAuthorizationToken";

const INITIAL_STATE = {
  currentUser: {},
  accessToken: localStorage.getItem("token") || "",
  login: false,
};

export const authReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "LOGIN_USER":
      localStorage.setItem("token", payload.access_token);
      return {
        accessToken: payload.access_token,
        currentUser: payload.user,
        login: true,
      };
    case "REGISTER_USER":
      return {
        accessToken: payload.access_token,
        currentUser: payload.user,
        login: true,
      };
    case "SET_USER":
      return {
        ...state,
        login: true,
        currentUser: payload,
      };
    case "LOGOUT_USER":
      localStorage.removeItem("token");
      setAuthorizationToken(false);
      return {
        currentUser: {},
        accessToken: "",
        login: false,
      };
    default:
      return state;
  }
};
