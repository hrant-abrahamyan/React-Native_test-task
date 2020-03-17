import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

const ProfileCard = () => {
  const {auth, user} = useSelector(storeState => storeState);
  const {token} = auth;
  const {name, balance} = user;

  if (!token) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text>Name: </Text>
        <Text style={styles.infoText}>{name}</Text>
      </View>
      <View style={styles.info}>
        <Text>Balance: </Text>
        <Text style={styles.infoText}>{balance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
  },
  info: {
    flexDirection: 'row',
  },
  infoText: {
    color: 'blue',
  },
});

export default ProfileCard;
