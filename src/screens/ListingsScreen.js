import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import firestore from '@react-native-firebase/firestore';

//import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
//import listingsApi from "../api/listings";
//import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
//import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {

    const [jobs, setThreads] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = firestore()
            .collection('jobs')
            .orderBy('createdAt', 'desc')
            .onSnapshot(querySnapshot => {
                const jobs = querySnapshot.docs.map(documentSnapshot => {
                    return {
                        _id: documentSnapshot.id,
                        aftersale: '',
                        createdAt: '',
                        deliverables: '',
                        description: '',
                        picture: '',
                        price: '',
                        time: '',
                        title: '',
                        ...documentSnapshot.data()
                    }

                })
                setThreads(jobs)
                if (loading) {
                    setLoading(false)
                }
            })

        return () => unsubscribe()
    }, [])


    return (
        <View style={styles.container}>
            <FlatList
                data={jobs}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', { thread: item })}>
                        <View style={styles.row}>
                            <View style={styles.content}>
                                <View style={styles.header}>
                                    <Text style={styles.nameText}>{item.name}</Text>
                                </View>
                                <Text style={styles.contentText}>
                                    {item.title}${item.price}
                                </Text>

                                <Image source={{ uri: item.picture }} style={{ width: 250, height: 100 }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
});

export default ListingsScreen;