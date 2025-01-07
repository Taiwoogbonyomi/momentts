import axios from "axios";

axios.defaults.baseURL = 'https://taiwo-drf-api-cbaa09a98259.herokuapp.com/';
axios.defaults.headers.post['Content-Type']= 'multipart/form-data';
axios.defaults.withCredentials = true;