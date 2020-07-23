import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.loading}>Loading</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    loading: {
        fontSize:22,
    }
});

export default Loading;
