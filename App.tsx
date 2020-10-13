import 'react-native-gesture-handler';
import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import RootNavigation from './app/navigation/root-navigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <RootNavigation />
    </PaperProvider>
  );
};

export default App;