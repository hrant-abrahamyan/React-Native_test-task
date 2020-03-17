import React from 'react';
import R from 'ramda';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {createSelector} from 'reselect';
import {View, StyleSheet} from 'react-native';

import {noop} from '../../utils';
import {FlexWritableFieldItem, Notifier, FlexButton} from '../../components';

const LoginScreen = ({
  fields,
  emailError,
  passwordError,
  loginHandler,
  buttonTitle,
}) => {
  const renderFields = () =>
    fields.map(field => (
      <FlexWritableFieldItem
        {...field}
        key={field.id}
        containerStyle={styles.input}
      />
    ));

  return (
    <View style={styles.container}>
      <Notifier />
      <View style={styles.inputsContainer}>{renderFields()}</View>
      <FlexButton
        primary
        raised
        onPress={loginHandler}
        disabled={emailError || passwordError ? true : false}>
        {buttonTitle}
      </FlexButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  inputsContainer: {
    marginBottom: 20,
  },
  input: {
    width: 200,
    marginVertical: 20,
  },
  fieldContainer: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  field: {
    backgroundColor: '#ffffff',
    paddingLeft: 8,
    borderRadius: 5,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 32,
  },
});

LoginScreen.propTypes = {
  email: '',
  password: '',
  emailError: null,
  passwordError: null,
  loginHandler: noop,
};

LoginScreen.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  emailError: PropTypes.any,
  passwordError: PropTypes.any,
  loginHandler: PropTypes.func,
  fields: PropTypes.array.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

const mapStateToProps = createSelector(
  R.path(['form', 'login', 'syncErrors', 'email']),
  R.path(['form', 'login', 'syncErrors', 'password']),
  (email, password, emailError, passwordError) => ({
    emailError,
    passwordError,
  }),
);

export default reduxForm({
  form: 'login',
})(connect(mapStateToProps)(LoginScreen));
