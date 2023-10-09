import axios from 'axios';

const requestOptions = {
    post(url, body) {
        return {
            url: url,
            method: "POST",
            data: body,
        };
    },
}

export const apiService = {
    post(path, body) {
        return axios(requestOptions.post(path, body))
    },
}