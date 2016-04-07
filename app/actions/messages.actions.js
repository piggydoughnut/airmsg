/** Actions */
export const MESSAGES_LOAD = 'MESSAGES LOAD';
export const MESSAGES_LOAD_SUCCESS = 'MESSAGES LOAD SUCCESS';
export const MESSAGES_LOAD_FAILURE = 'MESSAGES LOAD FAILURE';
export const MESSAGE_OPEN = 'MESSAGE OPEN';
export const MESSAGE_POST = 'MESSAGE POST';
export const MESSAGE_POST_SUCCESS = 'MESSAGE POST SUCCESS';
export const MESSAGE_POST_FAILURE = 'MESSAGE POST FAILURE';

/** Action creators */
export function loadMessages(position, radius) {
    return {
        type: MESSAGES_LOAD,
        payload: {
            position,
            radius: radius
        }
    }
}

export function openMessage(msg) {
    return {
        type: MESSAGE_OPEN,
        payload: {
            msg: msg
        }
    }
}

export function postMessage(data) {
    return {
        type: MESSAGE_POST,
        payload: {
            message: data
        }
    };
}

/** SUCCESS/FAILURE action creators */

export function postMessageSuccess(data) {
    return {
        type: MESSAGE_POST_SUCCESS,
        payload: {
            messages: data,
            redirect: true
        }
    };
}

export function postMessageFailure(error) {
    return {
        type: MESSAGE_POST_FAILURE,
        payload: {
            error: error,
        }
    };
}

export function loadMessagesSuccess(data) {
    return {
        type: MESSAGES_LOAD_SUCCESS,
        payload: {
            messages: data
        }
    };
}

export function loadMessagesFailure(error) {
    return {
        type: MESSAGES_LOAD_FAILURE,
        payload: {
            error: error,
        }
    };
}

