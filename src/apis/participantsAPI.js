import axios from 'axios';

import {DEFAULT_DJANGO_BASE_URL} from "../constants/participantsConsts";

export default axios.create({
    baseURL: DEFAULT_DJANGO_BASE_URL
});
