import shortid from 'shortid';
import {withProps} from 'recompose';

import {validate} from '../../utils';
import RegisterScreen from './RegisterScreen';

const RegisterScreenProps = withProps({
  fields: [
    {
      id: shortid.generate(),
      name: 'username',
      title: 'Username',
      underline: true,
      validate: validate.validateName,
    },
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
      validate: validate.validatePassword,
    },
    {
      id: shortid.generate(),
      name: 'confirmPassword',
      title: 'Confirm password',
      underline: true,
      secureTextEntry: true,
      validate: validate.validateEqual,
    },
  ],
  buttonTitle: 'Submit',
})(RegisterScreen);

export default RegisterScreenProps;
