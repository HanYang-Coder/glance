import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
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

function ListingsScreen({ userId }) {

    //const [jobs, setThreads] = useState([]);
    useEffect(() => {
        const subscriber = firestore()
            .collection('jobs')
            .doc('lK5o48MsJjMiYqmt0ioH') //generated id
        // .onSnapshot(documentSnapshot => {
        //     const jobs = [];
        //     console.log('User data: ', documentSnapshot.data().cat);
        // });
        const jobs = []
        querySnapshot.forEach(documentSnapshot => {
            jobs.push({
                ...documentSnapshot.data(),
                //key: documentSnapshot.id,
            });
        });
        setThreads(jobs)
        // Stop listening for updates when no longer required
        return () => subscriber();
    }, [userId]);


    return (



        // <View class="mjob-item__entry">
        //     <View class="mjob-item__title">
        //         <Text>{jobs}</Text>
        //     </View>

        //     <View class="mjob-item__author">
        //         <Text>Saito Yuta</Text>
        //     </View>

        // </View>
        <Text>{jobs.cat}</Text>

    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
});

export default ListingsScreen;
