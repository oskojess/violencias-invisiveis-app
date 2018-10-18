export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: 'ALERT_SUCCESS', message };
}

function error(message) {
    return { type: 'ALERT_ERROR', message };
}

function clear() {
    return { type: 'ALERT_CLEAR' };
}