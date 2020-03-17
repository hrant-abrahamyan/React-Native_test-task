import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

const DataItem = ({layout, item}) => {
  const {id, date, amount, balance, username} = item;
  const isGridLayout = layout === 'grid';

  return (
    <View
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          marginRight: isGridLayout ? 5 : 0,
        },
      ]}>
      <View style={styles.item}>
        <Text style={styles.itemName}>ID:</Text>
        <Text style={styles.itemInfo}>#{id}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemName}>
          {layout === 'list' ? 'Correspondent Name:' : 'CName:'}
        </Text>
        <Text style={styles.itemInfo}>{username}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemName}>Date:</Text>
        <Text style={styles.itemInfo}>{date}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemName}>Amount:</Text>
        <Text style={styles.itemInfo}>{amount}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemName}>Balance:</Text>
        <Text style={styles.itemInfo}>{balance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    marginRight: 5,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  itemName: {
    fontWeight: '600',
  },
  itemInfo: {
    color: 'blue',
    flexWrap: 'wrap',
    maxWidth: 140,
  },
});

DataItem.propTypes = {
  item: PropTypes.object.isRequired,
  layout: PropTypes.string.isRequired,
};

export default DataItem;
