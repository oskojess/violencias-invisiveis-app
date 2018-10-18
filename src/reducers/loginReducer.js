export function login(state = [], action) {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                loading: true
            }
        case 'LOGIN_SUCCESS':
            return {
              loggingIn: true,
              user: action.user,
              loading: false
            };
        case 'LOGIN_FAILURE':
            return {
              loggingIn: false,
              loading: false
            };
        default:
            return state;
    }
}