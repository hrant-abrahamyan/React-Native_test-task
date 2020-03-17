import PropTypes from 'prop-types';
import React from 'react';
import {Field} from 'redux-form';
import {Text, View, StyleSheet} from 'react-native';
import FormTextInput from '../FormTextInput';

const FlexWritableFieldItem = ({
  name,
  title,
  parse,
  format,
  validate,
  textStyle,
  underline,
  component,
  titleStyle,
  containerStyle,
  borderBottomStyle,
  placeholderTextColor,
  ...rest
}) => (
  <View style={[styles.viewStyle, containerStyle]}>
    {title && <Text style={[styles.titleTextStyle, titleStyle]}>{title}</Text>}
    <Field
      {...rest}
      name={name}
      parse={parse}
      format={format}
      validate={validate}
      component={component}
      style={[styles.fieldStyle, textStyle]}
      placeholderTextColor={placeholderTextColor}
    />
    {underline && <View style={[styles.underlineStyle, borderBottomStyle]} />}
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: 56,
    justifyContent: 'space-between',
    padding: 0,
  },
  titleTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  fieldStyle: {
    fontSize: 16,
    color: 'black',
    padding: 0,
  },
  underlineStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#D6CDCD',
  },
});

FlexWritableFieldItem.propTypes = {
  parse: PropTypes.func,
  format: PropTypes.func,
  title: PropTypes.string,
  component: PropTypes.any,
  underline: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  name: PropTypes.PropTypes.string.isRequired,
  validate: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
};

FlexWritableFieldItem.defaultProps = {
  title: undefined,
  underline: false,
  parse: undefined,
  format: undefined,
  autoCorrect: false,
  validate: undefined,
  autoCapitalize: 'none',
  component: FormTextInput,
};

export default FlexWritableFieldItem;
