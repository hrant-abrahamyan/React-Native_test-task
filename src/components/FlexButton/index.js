import PropTypes from 'prop-types';
import React from 'react';
import {Button} from 'react-native-material-ui';
import {noop} from '../../utils';

const FlexButton = ({children, style, onPress, disabled, primary, raised}) => (
  <Button
    style={style}
    raised={raised}
    text={children}
    primary={primary}
    onPress={onPress}
    disabled={disabled}
  />
);

FlexButton.propTypes = {
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  raised: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.any.isRequired,
};

FlexButton.defaultProps = {
  style: {},
  onPress: noop,
  disabled: false,
  primary: false,
  raised: false,
  containerStyle: undefined,
  disabledContainerStyle: undefined,
};

export default FlexButton;
