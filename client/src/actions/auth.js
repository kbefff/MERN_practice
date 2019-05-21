import axios from 'axios';
import { setAlert } from './alert';
import {
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from './types';


// register user
export const register = ({ name, email, password }) => async distpatch => {
    const config = {
        headers: {
            'Content-type' : 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password })

    try {
        const res = await axios.post('/api/users', body, config)
        
        dispatchEvent({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatchEvent({
            types: REGISTER_FAIL
        })
    }
}