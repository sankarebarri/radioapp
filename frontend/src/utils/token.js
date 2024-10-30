export const getAccessToken = () => localStorage.getItem("access_token");
export const setAccessToken = (token) =>
  localStorage.setItem("access_token", token);
export const removeAccessToken = () => localStorage.removeItem("access_token");

export const getRefreshToken = () => localStorage.getItem("refresh_token");
export const setRefreshToken = (token) =>
  localStorage.removeItem("refresh_token", token);
export const removeRefreshToken = () =>
  localStorage.removeItem("refresh_token");
