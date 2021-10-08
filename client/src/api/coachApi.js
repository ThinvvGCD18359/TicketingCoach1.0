import axiosClient from './axiosClient';

const coachApi = {
   getAllCoaches: (params) => {
      const url = '/coach';
      return axiosClient.get(url, params);
   },

   getPopular: () => {
      const url = '/coach/popular';
      return axiosClient.get(url);
   },

   createCoach: (data) => {
      const url = '/coach/createcoach';
      return axiosClient.post(url, data);
   },

   createRoute: (data) => {
      const url = '/coach/createroute';
      return axiosClient.post(url, data);
   },
   
   addSeat: (data) => {
      const url = '/coach/addseat';
      return axiosClient.post(url, data);
   },
};

export default coachApi;