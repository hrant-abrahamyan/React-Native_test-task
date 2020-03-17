import React, {useState, useEffect} from 'react';
import {orderBy} from 'lodash';
import {useSelector} from 'react-redux';
import {Picker, StyleSheet, FlatList} from 'react-native';

import {sortArrByDate} from '../../utils';
import {DataItem, Container} from '../../components';

const ProfileScreen = ({sortOptions, layoutOptions}) => {
  const {trans_token} = useSelector(storeState => storeState.user);
  const [layout, setLayout] = useState('list');
  const [sortKey, setSortKey] = useState(null);
  const [key, setKey] = useState(1);
  const colsCount = layout === 'list' ? 1 : 2;
  const sortedTransaction = sortArrByDate(trans_token, 'date', 'desc');
  const [transactions, setTransactions] = useState(sortedTransaction);

  useEffect(() => {
    setTransactions(sortedTransaction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trans_token]);

  const onSortChange = value => {
    setSortKey(value);
    switch (value) {
      case 'date':
        const sortedByDateTransaction = sortArrByDate(
          transactions,
          'date',
          'asc',
        );
        setTransactions(sortedByDateTransaction);
        break;
      case 'amount':
      case 'username':
        const sortTransactions = orderBy(transactions, [value], ['asc']);
        setTransactions(sortTransactions);
        break;

      default:
        setTransactions(sortedTransaction);
        break;
    }
  };

  const onLayoutChange = value => {
    setLayout(value);
    setKey(key + 1);
  };

  const renderTransaction = ({item}) => (
    <DataItem layout={layout} item={item} />
  );

  const renderOptions = arr =>
    arr.map(item => (
      <Picker.Item label={item.label} value={item.value} key={item.value} />
    ));

  return (
    <Container style={styles.container}>
      <Picker selectedValue={sortKey} onValueChange={onSortChange}>
        {renderOptions(sortOptions)}
      </Picker>
      <Picker selectedValue={layout} onValueChange={onLayoutChange}>
        {renderOptions(layoutOptions)}
      </Picker>
      <FlatList
        key={key}
        bounces={false}
        data={transactions}
        numColumns={colsCount}
        renderItem={renderTransaction}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.transactionsContainer}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
  },
  transactionsContainer: {paddingBottom: 100, flexGrow: 1},
});

export default ProfileScreen;
