import React from 'react';
import R from 'ramda';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {createSelector} from 'reselect';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {noop} from '../../utils';
import {FlexWritableFieldItem, Notifier, FlexButton} from '../../components';

const RegisterScreen = ({
  email,
  fields,
  password,
  username,
  emailError,
  navigation,
  buttonTitle,
  passwordError,
  usernameError,
  registerHandler,
  confirmPasswordError,
}) => {
  const buttonDisabled =
    usernameError || emailError || passwordError || confirmPasswordError
      ? true
      : false;
  const renderFields = () =>
    fields.map(field => (
      <FlexWritableFieldItem
        {...field}
        key={field.id}
        containerStyle={styles.input}
      />
    ));

  return (
    <KeyboardAwareScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      <Notifier />

      <View style={styles.inputsContainer}>{renderFields()}</View>
      <FlexButton
        primary
        raised
        disabled={buttonDisabled}
        onPress={() => registerHandler(username, email, password)}>
        {buttonTitle}
      </FlexButton>
      <TouchableOpacity
        style={styles.goLoginContainer}
        onPress={() => navigation.navigate('Login')}>
        <Text>Go to Login</Text>
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
  inputsContainer: {
    marginBottom: 20,
  },
  goLoginContainer: {
    marginTop: 20,
  },
  input: {
    width: 200,
    marginVertical: 20,
  },
});

RegisterScreen.propTypes = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  emailError: null,
  usernameError: null,
  passwordError: null,
  registerHandler: noop,
  confirmPasswordError: null,
};

RegisterScreen.propTypes = {
  email: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  emailError: PropTypes.any,
  usernameError: PropTypes.any,
  passwordError: PropTypes.any,
  registerHandler: PropTypes.func,
  confirmPassword: PropTypes.string,
  fields: PropTypes.array.isRequired,
  confirmPasswordError: PropTypes.any,
  navigation: PropTypes.object.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

const mapStateToProps = createSelector(
  R.path(['form', 'register', 'values', 'username']),
  R.path(['form', 'register', 'values', 'email']),
  R.path(['form', 'register', 'values', 'password']),
  R.path(['form', 'register', 'values', 'confirmPassword']),
  R.path(['form', 'register', 'syncErrors', 'username']),
  R.path(['form', 'register', 'syncErrors', 'email']),
  R.path(['form', 'register', 'syncErrors', 'password']),
  R.path(['form', 'register', 'syncErrors', 'confirmPassword']),
  (
    username,
    email,
    password,
    confirmPassword,
    usernameError,
    emailError,
    passwordError,
    confirmPasswordError,
  ) => ({
    username,
    email,
    password,
    confirmPassword,
    usernameError,
    emailError,
    passwordError,
    confirmPasswordError,
  }),
);

export default reduxForm({
  form: 'register',
})(connect(mapStateToProps)(RegisterScreen));
