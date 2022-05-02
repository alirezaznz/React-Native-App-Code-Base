import axios from "axios";

function getClientIP() {
    return axios.get(`https://api.ipify.org`);
}

export {
    getClientIP
}