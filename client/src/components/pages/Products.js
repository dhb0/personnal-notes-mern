import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts, logoutUser } from "../../actions/index";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      EDIT NOTE
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(logoutUser());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Products;
