import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {reduxStore} from './src/libraries';
import RootNavigator from './src/navigation';

const {store, persistor} = reduxStore();

const App = () => (
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootNavigator />
    </PersistGate>
  </ReduxProvider>
);

export default App;
