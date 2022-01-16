import axios from 'axios';

const PROXY_URL = 'https://intense-mesa-62220.herokuapp.com/';
const API_URL = 'https://restcountries.com/';

const countriesAPI = axios.create({
    baseURL: `${PROXY_URL}${API_URL}`,
});

export default countriesAPI;
