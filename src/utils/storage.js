import AsyncStorage from '@react-native-community/async-storage';

const load = async name => {
  try {
    const value = await AsyncStorage.getItem(`@PW/${name}`);
    if (value !== null) {
      // console.log(value);
      // value previously stored
    }
    return value;
  } catch (error) {
    return error;
    // ignore write errors
  }
};

const save = async (name, value) => {
  try {
    const serializedState = JSON.stringify(value);
    await AsyncStorage.setItem(`@PW/${name}`, serializedState);
  } catch (error) {
    // ignore write errors
  }
};

const remove = async (name, value) => {
  try {
    await AsyncStorage.removeItem(`@PW/${name}`);
  } catch (error) {
    // ignore write errors
  }
};

export default {save, load, remove};
