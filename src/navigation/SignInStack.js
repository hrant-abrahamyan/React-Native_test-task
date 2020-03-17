import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen, CreateTransactionScreen} from '../screens';

const Stack = createStackNavigator();

const SignInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Transactions" component={CreateTransactionScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignInStack;
