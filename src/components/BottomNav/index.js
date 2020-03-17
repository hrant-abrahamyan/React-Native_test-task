import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {withNavigation} from '@react-navigation/compat';
import {BottomNavigation} from 'react-native-material-ui';

const BottomNav = ({navItems, navigation}) => {
  const renderNavItems = () =>
    navItems.map(navItem => (
      <BottomNavigation.Action
        {...navItem}
        onPress={() => activeChangeHandler(navItem.key)}
      />
    ));

  const activeChangeHandler = current => {
    navigation.navigate(current);
  };

  return (
    <View style={styles.navContainer}>
      <BottomNavigation active={navigation.state.name}>
        {renderNavItems()}
      </BottomNavigation>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    bottom: 0,
    width: '100%',
    position: 'absolute',
  },
});

BottomNav.propTypes = {
  navItems: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default withNavigation(BottomNav);
