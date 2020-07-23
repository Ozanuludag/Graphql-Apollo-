//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native'

// create a component
const Evolutions = ({data}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Evolutions</Text>
            {!data && <Text>The Last stage of evolution.</Text>}
            {   data &&
                data.map((item,id) =>(
                  
                    <View key={id}>
                        <TouchableOpacity  
                        onPress={() => navigation.push('Detail',{
                        id:item.id,
                        name:item.name,
                        image: item.image
                    })} >
                            <View style={{alignItems:'center'}}>
                                <Image
                                    style={styles.image} 
                                    resizeMode="contain"
                                    source={{uri: item.image}} />
                            </View>    
                            
                            <View style={{alignItems:'center'}}>
                            <Text style={styles.name}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                     
                    </View>
                
                    ))
                    
            }
        
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       padding:10
    },
    title:{
        fontSize: 20,
    },
    image: {
        marginVertical:10,
        height:200,
        width:200
    },
    name: {
        fontSize:18,
    }
});

export default Evolutions;
