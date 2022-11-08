import axios from 'axios';
// https://borrowliteme.herokuapp.com 
// http://localhost:27017/
//https://valuef.herokuapp.com/
const instance = axios.create({
    baseURL: 'https://valuef.herokuapp.com/',
    withCredentials: true,
    method: 'POST, GET, PUT, DELETE',
});

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

export default instance;