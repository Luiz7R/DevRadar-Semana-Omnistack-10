import axios from 'axios';

const api = axios.create({
   baseURL: '' // usar a URL que parece no expo entre ''
});

export default api;