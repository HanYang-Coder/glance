import React, { useState, useContext, useEffect } from 'react';
// import { GiftedChat, Bubble, Send, SystemMessage } from 'react-native-gifted-chat';
import { ActivityIndicator, FlatList, Text, Image, View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import useStatsBar from '../utils/useStatusBar';

function ListingsDetailScreen({ route }) {

    const { thread } = route.params;
    console.log(thread)

    return (
        <View>
            <Text>{thread.title}</Text>
            <Text>${thread.price}</Text>
            <Text>Description{"\n"}{thread.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sendingContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomComponentContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    systemMessageWrapper: {
        backgroundColor: '#7C43AC',
        borderRadius: 4,
        padding: 5
    },
    systemMessageText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default ListingsDetailScreen;