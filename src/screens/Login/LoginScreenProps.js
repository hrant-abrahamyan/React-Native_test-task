import shortid from 'shortid';
import {withProps} from 'recompose';

import {validate} from '../../utils';
import LoginScreen from './LoginScreen';

const LoginScreenProps = withProps({
  fields: [
    {
      id: shortid.generate(),
      name: 'email',
      title: 'Email',
      underline: true,
      keyboardType: 'email-address',
      validate: validate.validateEmail,
    },
    {
      id: shortid.generate(),
      name: 'password',
      title: 'Password',
      underline: true,
      secureTextEntry: true,
      keyboardType: 'default',
      validate: validate.validatePassword,
    },
  ],
  buttonTitle: 'Submit',
})(LoginScreen);

export default LoginScreenProps;
