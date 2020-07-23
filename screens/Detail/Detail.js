
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../../src/components/Loading';
import Label from '../../src/components/Label';
import Evolutions from '../../src/components/Evolutions';
import {POKEMON_QUERY} from '../../screens/Pokemons/queries';

const Detail = ({route}) => {
    const {id} = route.params
    const {error, loading, data} = useQuery(POKEMON_QUERY, {
        variables: {
            id
        }
    });

    if(loading){
        return <Loading />
    }
    if(error){
    return(<Text>Error{error}</Text>)
    }

    const {name, image, types, weaknesses, evolutions} = data.pokemon
    
    return (
        <ScrollView style={styles.container}>
           <View style={{alignItems:'center', marginVertical:10}}>
                <Image
                style={styles.image} 
                resizeMode="contain"
                source={{uri: image}} />

                <Text style={{marginVertical:5, fontSize:24}}>{name}</Text>
           </View>
          
            <Label title="Types" data={types} />
            <Label title="Weaknesses" data={weaknesses} />
            <Evolutions data={evolutions} />
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        marginVertical:10,
        height:200,
        width:200
    },
    name: {
        fontSize:18,
        marginLeft:15,
    }
});

export default Detail;
