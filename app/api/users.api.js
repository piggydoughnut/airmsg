var api = require('../config/api');
import {get, post, put} from "./default.api";

export function getAccess(data) {
    return getToken(data.user.username, data.user.password);

}

function getToken(username, password) {
    return fetch(api.domain + '/api/oauth/token', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            grant_type: 'password',
            client_id: api.client_id,
            client_secret: api.client_secret,
            username: username,
            password: password
        })
    })
        .then((response) => {
            console.log(response);
            if (response.status >= 400) {
                return {
                    status: response.status
                }
            }
            return response.json();
        })
        .then((responseData) => {
            return responseData;
        })
        .catch((err) => {
            return {
                error: 'Network request failed'
            }
        });
}

export function getUserInfo(access_token) {
    return get(api.domain + '/api/users/me', access_token);
}

export function registerUser(data) {
    return post(api.domain + '/api/users', data.access_token, data);
}

export function editUser(data) {
    return put(api.domain + '/api/users/'+data.user._id, data.token, data.user);
}

export function getTokenAfterExpired(refreshToken) {

}
