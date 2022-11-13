import axiosClient from "./axiosClient";

const productAPI = {
  getProductAll: (params) => {
    const url = "/product";
    return axiosClient.get(url, { params });
  },

  getProduct: (id) => {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },

  addProduct: async (data) => {
    const url = "/product";
    return await axiosClient.post(url, data);
  },

  updateProduct: async (data) => {
    const url = `/product/${data.id}`;
    return await axiosClient.put(url, data);
  },

  deleteProduct: async (id) => {
    const url = `/product/${id}`;
    return await axiosClient.delete(url);
  },
};

export default productAPI;
