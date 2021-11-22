import axios from 'axios';

export const api = axios.create({
    baseURL:'http://gateway.marvel.com/v1/public',
})
export const apiSeries = axios.create({
    baseURL:'',
})
