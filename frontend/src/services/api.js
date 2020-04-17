import axios from 'axios';

const api = axios.create({
  baseURL: 'https://instarocket-server.lucaslombardif.codes',
});

export default api;