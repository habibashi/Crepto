import axios from "axios";

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const { data } = await axios.post(API_URL + "register", userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }

  return data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

// Login user
const login = async (userData) => {
  const { data } = await axios.post(API_URL + "login", userData);

  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

// get balance
const balance = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await axios.get(API_URL + "me", config);

  return data;
};

const authService = {
  register,
  logout,
  login,
  balance,
};

export default authService;
