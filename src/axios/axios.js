import axios from 'axios';

const API_URL = axios.create({baseURL: 'http://localhost:5000/',});


export const getChat = async () => await API_URL.get('/');

export const postChat = async (data) => await API_URL.post('/', data);


