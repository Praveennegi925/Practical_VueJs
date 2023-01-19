import Vue from 'vue';
import axios from 'axios';
axios.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  
        // var token = store.getters.token;
        // alert(token)
        // console.log('lll'+token)
        // if (token) {
        //     config.headers['Authorization'] = 'Bearer ' + token; 
        // }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

Vue.use(axios);