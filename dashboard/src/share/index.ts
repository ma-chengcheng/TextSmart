import Axios from 'axios';
const request = Axios.create({
    timeout: 2000,
    withCredentials: true
})
request.interceptors.request.use(function(config) {
    return config;
}, function (error) {
    return Promise.reject(error);
})
request.interceptors.response.use(function(response) {
    return response;
}, function (err) {
    return Promise.reject(err);
}) 
export default request;