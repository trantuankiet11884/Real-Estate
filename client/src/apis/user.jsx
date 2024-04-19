import instance from "../utils/axios";

export const apiGetCurrent = () => {
  return instance({
    url: "/user/current",
    method: "GET",
  });
};
