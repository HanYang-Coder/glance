import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import firestore from '@react-native-firebase/firestore';
import useStatsBar from '../utils/useStatusBar';

export default function AddRoomScreen({ navigation }) {
    useStatsBar('dark-content');

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [time, setTime] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [aftersale, setAftersale] = useState('');

    function handleButtonPress() {
        if (title.length > 0) {
            firestore()
                .collection('jobs')
                .add({
                    title: title,
                    price: price,
                    time: time,
                    createdAt: new Date().getTime(),
                    //createdBy: createdBy,

                    cat: category,
                    description: description,
                    aftersale: aftersale
                })
                .then(() => {
                    navigation.navigate('Listings');
                });
        }
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.closeButtonContainer}>
                <IconButton
                    icon="close-circle"
                    size={36}
                    color="#6646ee"
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={styles.innerContainer}>
                <Title style={styles.title}>Create a job listing</Title>
                <FormInput
                    labelName="Title"
                    value={title}
                    onChangeText={text => setTitle(text)}
                />
                <FormInput
                    labelName="Price"
                    value={price}
                    onChangeText={text => setPrice(text)}
                />
                <FormInput
                    labelName="Time"
                    value={time}
                    onChangeText={text => setTime(text)}
                />
                <FormInput
                    labelName="Category"
                    value={category}
                    onChangeText={text => setCategory(text)}
                />
                <FormInput
                    labelName="Description"
                    value={description}
                    onChangeText={text => setDescription(text)}
                />
                <FormInput
                    labelName="Aftersale (optional)"
                    value={aftersale}
                    onChangeText={text => setAftersale(text)}
                />
                <FormButton
                    title="Create"
                    modeValue="contained"
                    labelStyle={styles.buttonLabel}
                    onPress={() => handleButtonPress()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 30,
        right: 0,
        zIndex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 10
    },
    buttonLabel: {
        fontSize: 22
    }
});
