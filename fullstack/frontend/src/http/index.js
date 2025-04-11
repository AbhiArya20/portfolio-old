import axios from 'axios';
import { EMAIL_SERVICE_API_URL } from '../envConfig';
const api = axios.create({
  baseURL: EMAIL_SERVICE_API_URL
});

export const sendMessage = async (data) => await api.post('/send-message', data);
