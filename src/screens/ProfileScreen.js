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

    return (
        <View style={styles.container}>
            <Text></Text>
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