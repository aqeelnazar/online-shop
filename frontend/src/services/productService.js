import { request } from "./api";

export const getProducts = () => request("/products");

export const getProduct = (id) => request(`/products/${id}`);
