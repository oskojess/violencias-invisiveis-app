import axios from 'axios';
import { alertActions } from './alert';

export const userActions = {
  login
};

function login(user, history) {
  return dispatch => {
      dispatch(loginRequest());

      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Fred',
        body: 'Flintstone',
        userId: 1
      })
      .then(function (user) {
        dispatch(loginSuccess(user));
        history.push('/dashboard');
      })
      .catch(function (error) {
        dispatch(loginfailed(error));
        dispatch(alertActions.error('Credenciais inválidas!'));
      });
  };

  function loginRequest() { return { type: 'LOGIN_REQUEST' } }
  function loginSuccess(user) { return { type: 'LOGIN_SUCCESS', user } }
  function loginfailed(error) { return { type: 'LOGIN_FAILURE', error } }
}
