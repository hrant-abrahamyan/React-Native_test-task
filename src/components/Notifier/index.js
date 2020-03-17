import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Snackbar} from 'react-native-material-ui';
import {removeMessage} from '../../ducks/toastMessage';

const Notifier = () => {
  const dispatch = useDispatch();
  const toastMessage = useSelector(storeState => storeState.toastMessage);

  const handleRemoveMessage = () => {
    dispatch(removeMessage());
  };

  return (
    <View style={styles.container}>
      <Snackbar
        message={toastMessage.text}
        visible={toastMessage.visible}
        onRequestClose={handleRemoveMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    width: 200,
    height: 30,
  },
});

export default Notifier;
