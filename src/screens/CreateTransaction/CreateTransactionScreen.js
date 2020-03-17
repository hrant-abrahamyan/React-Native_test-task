import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {StyleSheet, View} from 'react-native';
import {createSelector} from 'reselect';
import R from 'ramda';
import {
  Autocomplete,
  withKeyboardAwareScrollView,
} from 'react-native-dropdown-autocomplete';

import {FlexButton, FlexWritableFieldItem, Notifier} from '../../components';
import {getUsers} from '../../ducks/users';
import {validate} from '../../utils';

const CreateTransactionScreen = ({
  scrollToInput,
  onDropdownClose,
  onDropdownShow,
  sortedTransaction,
  getUsersHandler,
  initialize,
  amountError,
  createTransaction,
  amount,
}) => {
  const usernameInputRef = useRef(null);
  const [coorespond, setCoorespond] = useState({});

  const handleSelectItem = value => {
    if (value.id) {
      const transaction = sortedTransaction.find(
        transation => transation.id === value.id,
      );

      setCoorespond({
        ...transaction,
        amount: `${Math.abs(transaction.amount)}`,
      });
      usernameInputRef.current.handleInputChange(transaction.username);
      usernameInputRef.current.handleBlur();
      initialize({amount: `${Math.abs(transaction.amount)}`});
    }
  };

  const handleSelectName = value => {
    setCoorespond({...coorespond, username: value.name});
  };

  const suggestNames = async event => {
    try {
      const data = await getUsersHandler(event);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.notifier}>
        <Notifier />
      </View>
      <View style={styles.autocompletesContainer}>
        <>
          <Autocomplete
            rightContent
            highlightText
            data={sortedTransaction}
            inputStyle={styles.input}
            minimumCharactersCount={0}
            placeholder="Recent transactions"
            pickerStyle={styles.pickerStyle}
            handleSelectItem={handleSelectItem}
            valueExtractor={item => item.username}
            scrollToInput={ev => scrollToInput(ev)}
            onDropdownShow={() => onDropdownShow()}
            onDropdownClose={() => onDropdownClose()}
            inputContainerStyle={styles.inputContainerStyle}
            rightTextExtractor={item => `transaction #${item.id}`}
          />
          <View style={styles.underlineStyle} />
          <Autocomplete
            rightContent
            highlightText
            ref={usernameInputRef}
            placeholder="Username"
            initialValue={coorespond.username}
            inputStyle={styles.input}
            minimumCharactersCount={0}
            pickerStyle={styles.pickerStyle}
            valueExtractor={item => item.name || item.username}
            handleSelectItem={handleSelectName}
            scrollToInput={ev => scrollToInput(ev)}
            onDropdownShow={() => onDropdownShow()}
            onDropdownClose={() => onDropdownClose()}
            rightTextExtractor={item => `${item.id}`}
            inputContainerStyle={styles.inputContainerStyle}
            fetchData={suggestNames}
          />
          <View style={styles.underlineStyle} />
        </>
      </View>

      <FlexWritableFieldItem
        underline
        name="amount"
        placeholder="Amount"
        keyboardType="numeric"
        validate={validate.validateNumber}
        containerStyle={styles.input}
      />
      <View style={styles.submitBtn}>
        <FlexButton
          raised
          primary
          disabled={amountError || !coorespond.username ? true : false}
          onPress={() => createTransaction(coorespond.username, amount)}>
          Submit
        </FlexButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  notifier: {
    alignItems: 'center',
  },
  submitBtn: {
    marginTop: 20,
  },
  underlineStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#D6CDCD',
  },
  pickerStyle: {
    left: 0,
    borderColor: '#D6CDCD',
  },
  input: {
    width: '100%',
    borderWidth: 0,
    padding: 0,
    fontSize: 16,
    paddingBottom: 10,
    paddingLeft: 0,
  },
});

const mapStateToProps = createSelector(
  R.path(['form', 'createTransactoin', 'values', 'amount']),
  R.path(['form', 'createTransactoin', 'syncErrors', 'amount']),
  (amount, amountError) => ({
    amount,
    amountError,
  }),
);

const mapDispatchToProps = {getUsersHandler: getUsers};

export default reduxForm({
  form: 'createTransactoin',
})(
  withKeyboardAwareScrollView(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(CreateTransactionScreen),
  ),
);
