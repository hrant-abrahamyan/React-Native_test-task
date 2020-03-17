import React from 'react';
import {useDispatch} from 'react-redux';
import {ActionButton} from 'react-native-material-ui';

import {logout} from '../../ducks/auth';

const ProfileScreenContainer = () => {
  const dispatch = useDispatch();
  const actionHandler = actionName => {
    switch (actionName) {
      case 'logout':
        dispatch(logout());
        break;

      default:
        break;
    }
  };

  return (
    <ActionButton
      onPress={actionHandler}
      actions={[{icon: 'flight', label: 'Logout', name: 'logout'}]}
      style={{
        container: {
          backgroundColor: '#047cc4',
          elevation: 0,
          shadowRadius: 0,
          zIndex: 999,
        },
        positionContainer: {bottom: 90, zIndex: 9990, position: 'absolute'},
        toolbarContainer: {
          elevation: 0,
          backgroundColor: '#047cc4',
        },
      }}
      icon="apps"
      transition="speedDial"
    />
  );
};

export default ProfileScreenContainer;
