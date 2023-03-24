import axios from 'axios'
import { baseApi } from './Constants';

    const instance = axios.create({
        baseURL: baseApi,
       
      });

export default instance