import { SERVER_URL } from '@/shared/utils/consts';
import axios from 'axios';

export const axiosApi = axios.create({
	baseURL: SERVER_URL,
	headers: { 'Content-Type': 'application/json' },
});
