

import React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './tabs/tab';
const App=()=>{
  return (

    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}

export default App;
