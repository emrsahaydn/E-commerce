import axiosInstance from "../api/axiosInstance";
import { setRoles, setUser } from "./clientActions";
import { setCategories } from "./productActions";

// ROLLER İÇİN THUNK
export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { client } = getState();

    if (client.roles && client.roles.length > 0) {
      console.log("Roles already loaded, skipping fetch.");
      return;
    }

    try {
      const response = await axiosInstance.get("/roles");
      dispatch(setRoles(response.data));
    } catch (error) {
      console.error("Failed to fetch roles:", error);
    }
  };
};

// LOGIN THUNK
export const loginUser = (credentials, rememberMe) => {
  return async (dispatch) => {
    try {
      const res = await axiosInstance.post("/login", {
        email: credentials.email,
        password: credentials.password,
      });

      const { token, name, email, role_id } = res.data;

      const user = { name, email, role_id };
      dispatch(setUser(user));

      // Remember me → localStorage
      if (rememberMe) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("user", JSON.stringify(user));
      }

      return user;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Login failed. Check your credentials.";
      throw new Error(message);
    }
  };
};

export const verifyToken = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      // axios header ekle
      axiosInstance.defaults.headers.common["Authorization"] = token;

      const res = await axiosInstance.get("/verify");

      const { name, email, role_id, token: newToken } = res.data;

      dispatch(setUser({ name, email, role_id }));

      // token yenilendiyse tekrar kaydet
      if (newToken) {
        localStorage.setItem("token", newToken);
        axiosInstance.defaults.headers.common["Authorization"] = newToken;
      }

    } catch (err) {
      // token bozuk → sil
      localStorage.removeItem("token");
      delete axiosInstance.defaults.headers.common["Authorization"];
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    const { product } = getState();

    // Eğer categories zaten yüklüyse tekrar API'ye gitme
    if (product.categories.length > 0) {
      console.log("Categories already loaded, skipping fetch.");
      return;
    }

    try {
      const response = await axiosInstance.get("/categories");
      dispatch(setCategories(response.data));
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };
};


