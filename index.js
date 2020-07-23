import {AppRegistry} from 'react-native';
import Router from './src/Router'
import {name as appName} from './app.json';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink } from '@apollo/client';

const client = new ApolloClient({
   
    uri: 'https://graphql-pokemon.now.sh/',
    cache: new InMemoryCache()
  });

  const App = () => (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );

AppRegistry.registerComponent(appName, () => App);
