import axiosClient from './axiosClient';

const checkoutApi = {
    checkout: (data) => {
        const url = '/checkout';
        return axiosClient.post(url, data);
    },
}

export default checkoutApi;