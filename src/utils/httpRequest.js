import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (url, options = {}) => {
    try {
        const response = await httpRequest.get(url, options);
        return response.data;
    } catch (error) {
        console.log('Http request error: ' + error);
    }
};

export default httpRequest;
