import { request } from "./api";

export const loginUser = (credentials) =>
  request("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

export const registerUser = (payload) =>
  request("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
