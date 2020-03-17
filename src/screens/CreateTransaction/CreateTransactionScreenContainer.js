import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {bottomNavItems, sortArrByDate} from '../../utils';
import {getUserInfo, createUserTransation} from '../../ducks/user';
import CreateTransactionScreen from './CreateTransactionScreen';
import {BottomNav, Container, PwAcionGroup, UserInfo} from '../../components';

const CreateTransactionContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const {trans_token} = useSelector(storeState => storeState.user);
  const sortedTransaction = sortArrByDate(trans_token, 'date', 'desc');

  useEffect(() => {
    const getUserInfoHandler = () => {
      dispatch(getUserInfo());
    };

    getUserInfoHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createTransaction = (name, value) => {
    dispatch(createUserTransation(name, value)).then(async () => {
      await dispatch(getUserInfo());
      navigation.navigate('Profile');
    });
  };

  return (
    <Container>
      <UserInfo />
      <CreateTransactionScreen
        sortedTransaction={sortedTransaction}
        createTransaction={createTransaction}
      />
      <PwAcionGroup />
      <BottomNav navItems={bottomNavItems} initialActive="Transactions" />
    </Container>
  );
};

export default CreateTransactionContainer;
