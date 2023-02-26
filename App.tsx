import { AppStack } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import { store } from '@store';
import { theme } from '@styles';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <AppStack />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
