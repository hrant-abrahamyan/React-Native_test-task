import * as R from 'ramda';
import {storage} from '../utils';
import {logoutUser} from './user';
import {axios} from '../libraries';

import {addMessage} from './toastMessage';

const GET_TOKEN = '@PW/auth/GET';

const initialState = {
  token: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export const loadToken = token => {
  return {type: GET_TOKEN, token};
};

export const login = () => (dispatch, getState) =>
  new Promise(async (resolve, reject) => {
    const {email, password} = getState().form.login.values;

    try {
      const {data} = await axios.post('/sessions/create', {
        email,
        password,
      });

      dispatch(loadToken(data.id_token));
      await storage.save('token', data.id_token);
      resolve(data);
    } catch (error) {
      const data = R.path(['response', 'data'], error);
      const msg = data ? data : 'Something went wrong';
      dispatch(addMessage(msg));
      reject(msg);
    }
  });

export const register = (username, password, email) => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      const {data} = await axios.post('/users', {
        username,
        password,
        email,
      });

      dispatch(loadToken(data.id_token));
      await storage.save('token', data.id_token);
      resolve(data);
    } catch (error) {
      const data = R.path(['response', 'data'], error);
      const msg = data ? data : 'Something went wrong';
      dispatch(addMessage(msg));
      reject(msg);
    }
  });

export const logout = () => async dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      dispatch(logoutUser());
      dispatch(loadToken(null));
      await storage.save('token', '');
      resolve();
    } catch (error) {
      reject(error);
    }
  });
