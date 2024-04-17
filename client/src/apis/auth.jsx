import instance from "../utils/axios";

export const apiRegister = (data) => {
  return instance({
    url: "/auth/register",
    method: "POST",
    data,
  });
};

export const apiLogin = (data) => {
  return instance({
    url: "/auth/login",
    method: "POST",
    data,
  });
};

export default {
  apiRegister,
  apiLogin,
};
