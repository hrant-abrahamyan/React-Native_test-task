import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';

import {register} from '../../ducks/auth';
import RegisterScreenProps from './RegisterScreenProps';

const RegisterScreenContainer = ({navigation}) => {
  const dispatch = useDispatch();

  const registerScreenHandler = (username, email, password) => {
    dispatch(register(username, password, email));
  };

  return (
    <RegisterScreenProps
      navigation={navigation}
      registerHandler={registerScreenHandler}
    />
  );
};

RegisterScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RegisterScreenContainer;
