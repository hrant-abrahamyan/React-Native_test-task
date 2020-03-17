import React from 'react';
import {useSelector} from 'react-redux';
import SignInStack from './SignInStack';
import SignOutStack from './SignOutStack';

const RootNavigator = () => {
  const authToken = useSelector(state => state.auth.token);

  return authToken ? <SignInStack /> : <SignOutStack />;
};

export default RootNavigator;
