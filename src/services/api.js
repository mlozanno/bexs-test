import axios from 'axios';

const api = axios.create({
	baseURL: 'https://5ec1efba61975300160927c2.mockapi.io/api/v1/',
});

export default api;
