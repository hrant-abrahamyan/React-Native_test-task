import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {bottomNavItems} from '../../utils';
import {getUserInfo} from '../../ducks/user';
import ProfileScreenProps from './ProfileScreenProps';
import {BottomNav, Container, PwAcionGroup, UserInfo} from '../../components';

const ProfileScreenContainer = () => {
  const dispatch = useDispatch();

  const getUserInfoHandler = () => {
    dispatch(getUserInfo());
  };

  useEffect(() => {
    getUserInfoHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <UserInfo />
      <ProfileScreenProps />
      <PwAcionGroup />
      <BottomNav navItems={bottomNavItems} initialActive="Home" />
    </Container>
  );
};

export default ProfileScreenContainer;
