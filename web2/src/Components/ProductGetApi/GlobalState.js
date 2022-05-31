import React, { createContext, useState, useEffect } from "react";
import ProductsAPI from "./API/ProductsAPI";
import UserAPI from "./API/UserAPI";
import axios from "axios";
import CategoriesAPI from "./API/CategoriesAPI";
export const Cart2 = createContext();
export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        const res = await axios.get("/user/refresh_token");

        setToken(res.data.accesstoken);

        setTimeout(() => {
          refreshToken();
        }, 10 * 60 * 1000);
      };
      refreshToken();
    }
  }, []);
  const state = {
    token: [token, setToken],
    productsAPI: ProductsAPI(),
    userAPI: UserAPI(token),
    categoriesAPI: CategoriesAPI(),
  };

  ProductsAPI();
  return <Cart2.Provider value={state}>{children}</Cart2.Provider>;
};
