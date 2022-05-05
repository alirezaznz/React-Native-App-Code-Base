import {API} from './config';

function Login(mobile) {
    return API.post('/login', {username: mobile});
}

export {Login};
