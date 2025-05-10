import axios from 'axios';
const EMAIL_SERVICE_API_URL = import.meta.env.VITE_EMAIL_SERVICE_API_URL;

const api = axios.create({
  baseURL: EMAIL_SERVICE_API_URL
});

export type ContactData = {
  fullName: string;
  email: string;
  phone: string;
  extra: string;
};

export const sendMessage = async (data: ContactData) => await api.post('/send-message', data);
