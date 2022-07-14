import axios from 'axios';

const instance = axios.create({
    baseURL: `${ _dittoURL_ }/wp-json/`
});

export default instance;