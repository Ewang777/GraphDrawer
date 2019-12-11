import axios from 'axios'
import Vue from 'vue'
import HttpStatus from 'http-status'

const axiosInstance = axios.create({
  baseURL: '',
  withCredentials: true
});

axiosInstance.interceptors.response.use((response) => {
  return response
}, (error) => {
  if (error.message.indexOf('Network Error') >= 0) {
    Vue.prototype.$notify.error('Network error, please check your network settings!')
  } else if (error.response.status >= HttpStatus.BAD_REQUEST) {
    Vue.prototype.$notify.error(error.response.data.message)
  }
});

export const AXIOS = axiosInstance;
