var api = require('../config/api');

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
    return fetch(api.domain + '/api/users/me', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + access_token
        }
    })
        .then((response) => {
            if (response.status >= 400) {
                return {
                    status: response.status
                }
            }
            return response.json();
        })
        .then((responseData) => {
            return responseData;
        });
}

export function getTokenAfterExpired(refreshToken) {

}