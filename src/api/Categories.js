import axios from 'axios';
import { config } from '../../config.js';

axios.defaults.baseURL = config.BASE_URL;

export const getCategories = async () => {
    try {
        const response = await axios.get('/category');
        if (response.data.status === 'success') {
            return response.data.data;
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
export const getSingleCategory = async (id) => {
    try {
        const response = await axios.get(`/category/${id}`);
        if (response.data.status === 'success') {
            return response.data.data;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}