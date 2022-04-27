import { API } from "./config";

function Login(params) {
    return API.post(`/login`, params);
}

export {
    Login
}