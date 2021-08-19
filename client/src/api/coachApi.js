import axiosClient from './axiosClient';

const coachApi = {
   getAllCoaches: (params) => {
      const url = '/coach';
      return axiosClient.get(url, params);
   },

   get: (id) => {
    const url = `/coach/${id}`;
    return axiosClient.get(url);
  },
};

export default coachApi;