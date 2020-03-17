import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {login} from '../../ducks/auth';
import LoginScreenProps from './LoginScreenProps';

const LoginScreenContainer = ({navigation}) => {
  const dispatch = useDispatch();

  const loginScreenHandler = () => {
    dispatch(login());
  };

  return (
    <KeyboardAwareScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <LoginScreenProps loginHandler={loginScreenHandler} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Go to Registration</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});

LoginScreenContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginScreenContainer;
