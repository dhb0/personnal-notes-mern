import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "./actions/index";
import { setAuthorizationToken } from "./helpers/setAuthorizationToken";
import Routes from "./routes/Routes";

const App = () => {
  const dispatch = useDispatch();

  let token = localStorage.getItem("token");
  setAuthorizationToken(token);

  useEffect(() => {
    if (token) {
      let decodedToken = jwt_decode(token);
      const { email, password } = decodedToken;
      dispatch(setUser({ email, password }));
    } else {
    }
  }, [dispatch, token]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
