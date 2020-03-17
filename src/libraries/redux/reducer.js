import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import {user, auth, users, toastMessage} from '../../ducks';

const rootReducer = combineReducers({
  form,
  user,
  auth,
  users,
  toastMessage,
});

export default rootReducer;
