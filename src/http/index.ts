import axios from 'axios';
const  EMAIL_SERVICE_API_URL = process.env.VITE_EMAIL_SERVICE_API_URL;

const api = axios.create({
  baseURL: EMAIL_SERVICE_API_URL
});

export const sendMessage = async (data) => await api.post('/send-message', data);
