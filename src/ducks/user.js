import * as R from 'ramda';
import {axios} from '../libraries';

import {addMessage} from './toastMessage';

const GET_USER_INFO = '@PW/user/GET';
const SET_LOGGED_OUT = '@PW/user/SET';
const CREATE_USER_TRANSACTION = '@PW/user/POST';

const initialState = {
  id: null,
  name: null,
  email: null,
  balance: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        ...action.userInfo,
      };
    case SET_LOGGED_OUT:
      return {
        ...state,
        id: null,
        name: null,
        email: null,
        balance: null,
      };
    case CREATE_USER_TRANSACTION:
      return {
        ...state,
        trans_token: [...state.trans_token, action.trans_token],
      };
    default:
      return state;
  }
};

export const loadUserTransaction = trans_token => {
  return {type: CREATE_USER_TRANSACTION, trans_token};
};

export const loadUserInfo = userInfo => {
  return {type: GET_USER_INFO, userInfo};
};

export const logoutUser = () => {
  return {type: SET_LOGGED_OUT};
};

export const getUserInfo = () => (dispatch, getState) =>
  new Promise(async (resolve, reject) => {
    const {token} = getState().auth;

    try {
      const userInfo = axios.get('/api/protected/user-info', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userTransactions = axios.get('/api/protected/transactions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const [info, transactions] = await Promise.all([
        userInfo,
        userTransactions,
      ]);

      dispatch(
        loadUserInfo({
          ...info.data.user_info_token,
          ...transactions.data,
        }),
      );
      resolve(info, transactions);
    } catch (error) {
      reject(error);
    }
  });

export const createUserTransation = (name, amount) => (dispatch, getState) =>
  new Promise(async (resolve, reject) => {
    const {token} = getState().auth;
    try {
      const {data} = await axios.post(
        '/api/protected/transactions',
        {
          name,
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      dispatch(loadUserTransaction(data.trans_token));
      resolve();
    } catch (error) {
      const data = R.path(['response', 'data'], error);
      const msg = data ? data : 'Something went wrong';
      dispatch(addMessage(msg));
      reject(msg);
    }
  });
