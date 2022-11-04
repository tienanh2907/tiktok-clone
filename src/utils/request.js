import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (url, options = {}) => {
    try {
        const response = await request.get(url, options);
        return response.data;
    } catch (error) {
        console.log('Request error: ' + error);
    }
};

export default request;
