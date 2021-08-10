import axiosClient from "./axiosClient";

const userApi = {
    getAll = (params) => {
    const url = '/products';
    return axiosClient.get(url, { params });
    },
}

export default userApi;