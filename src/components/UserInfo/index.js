import React from 'react';
import {useSelector} from 'react-redux';
import {Text, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const UserInfo = () => {
  const {balance, name, email, id} = useSelector(storeState => storeState.user);

  return (
    <LinearGradient colors={['#536976', '#292E49']} style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.infoTextContainer}>
          <Text style={styles.label}>ID:</Text>
          <Text style={styles.infoText}>{`#${id}`}</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.label}>Username:</Text>
          <Text style={styles.infoText}> {name}</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.infoText}> {email}</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.label}>Balance:</Text>
          <Text style={styles.infoText}> {balance}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    maxWidth: 320,
    width: '100%',
  },
  infoTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'justify',
  },
});

export default UserInfo;
