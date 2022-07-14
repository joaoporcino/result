import axios from 'axios';

export const Api = axios.create({
    baseURL: "http://regres.in/api/",
});