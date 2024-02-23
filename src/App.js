import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChakraProvider } from '@chakra-ui/react';

import Home from './screens/Home';
import Login from './screens/Login';
import Error from './screens/Error';

const client = new ApolloClient({
  uri: 'https://app.cuidadoconelperro.com.mx/graphql/',
  cache: new InMemoryCache()
});

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <ApolloProvider client={client}>
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
            <Stack.Screen
              name={'Error'}
              component={Error}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ChakraProvider>
    </ApolloProvider>
  );
}
