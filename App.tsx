import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigation';
import {StatusBar} from 'react-native';
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
