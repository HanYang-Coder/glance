import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { List, Divider } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import Loading from '../components/Loading';
import useStatsBar from '../utils/useStatusBar';

export default function HomeScreen({ navigation }) {
    useStatsBar('light-content');

    const [threads, setThreads] = useState([]);
    const [loading, setLoading] = useState(true);

    /**
     * Fetch threads from Firestore
     */
    // useEffect(() => {
    //     const unsubscribe = firestore()
    //         .collection('users')
    //         .orderBy('latestMessage.createdAt', 'desc')
    //         .onSnapshot(querySnapshot => {
    //             const threads = querySnapshot.docs.map(documentSnapshot => {
    //                 return {
    //                     _id: documentSnapshot.id,
    //                     // give defaults
    //                     name: '',

    //                     latestMessage: {
    //                         text: ''
    //                     },
    //                     ...documentSnapshot.data()
    //                 };
    //             });

    //             setThreads(threads);

    //             if (loading) {
    //                 setLoading(false);
    //             }
    //         });

    //     /**
    //      * unsubscribe listener
    //      */
    //     return () => unsubscribe();
    // }, []);

    // if (loading) {
    //     return <Loading />;
    // }

    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1
    },
    listTitle: {
        fontSize: 22
    },
    listDescription: {
        fontSize: 16
    }
});