import axios from 'axios';

export const userActions = {
  login
};

function login(username, password) {
  return dispatch => {
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Fred',
        body: 'Flintstone',
        userId: 1
      })
      .then(function (user) {
        dispatch(loginSuccess(user));
      })
      .catch(function (error) {
        dispatch(loginfailed(error));
      });
  };

  function loginSuccess(user) { return { type: 'LOGIN_SUCCESS', user } }
  function loginfailed(error) { return { type: 'LOGIN_FAILURE', error } }
}
