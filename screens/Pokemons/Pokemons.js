import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import ListItem from './ListItem'
import Loading from '../../src/components/Loading';
import {POKEMONS_QUERY} from './queries';

const Pokemons = () => {
const { loading, error, data } = useQuery(POKEMONS_QUERY);

if(loading){
    return <Loading />
}
if(error){
return(<Text>Error{error}</Text>)
}

  return (
    <View style={{flex:1}}>

      <FlatList
      data={data.pokemons}
      renderItem={({item}) => <ListItem item={item}/> }
      keyExtractor={item => item.id }
      />

    </View>
  );
};

export default Pokemons;
