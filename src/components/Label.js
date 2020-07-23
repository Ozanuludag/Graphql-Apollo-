import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListItem from '../../screens/Pokemons/ListItem';

const Label = ({title, data}) => {
   
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.labelContainer}>{
                data.map((item,id) => (
                <Text key={id} style={styles.label} >{item}</Text>
                ))
            }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical:5,
        paddingHorizontal:5,
    },
    title:{
        fontSize:20
    }, 
    labelContainer: {
        flexDirection:'row',
        marginVertical:10,
        flexWrap:'wrap',
    },
    label: {
        borderWidth:1,
        borderRadius:5,
        backgroundColor:'#999',
        marginRight:4,
        marginBottom:4,
        padding:5
    }
});

export default Label;
