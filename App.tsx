import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {NativeBaseProvider, StatusBar} from 'native-base';
import Navigation from './src/routes/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#4A4AB6" />
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
