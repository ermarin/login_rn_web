import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChakraProvider } from '@chakra-ui/react';

import Home from './screens/Home';
import Login from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <ChakraProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'Login'}
        >
          <Stack.Screen
            name={'Login'}
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={'Home'}
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ChakraProvider>
  );
}
