import {View, StyleSheet} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const Container = ({children, style}) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Container.defaultProps = {
  style: {},
};

Container.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Container;
