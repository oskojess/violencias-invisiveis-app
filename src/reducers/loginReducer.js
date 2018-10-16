export function login(state = [], action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
              loggingIn: true,
              user: action.user
            };
        case 'LOGIN_FAILURE':
            return {
              loggingIn: false
            };
        default:
            return state;
    }
}