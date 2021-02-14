import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, IconButton } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [about, setAbout] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');

    const { register } = useContext(AuthContext);

    function handleButtonPress() {
        if (email.length > 0) {
            firestore()
                .collection('users')
                .add({
                    about: about,
                    email: email,
                    phone: phone,
                    username: username,
                })
            // .then(() => {
            //     navigation.navigate('Listings');
            // });
        }
    }

    return (
        <View style={styles.container}>
            <Title style={styles.titleText}>Register to chat</Title>
            <FormInput
                labelName='Username'
                value={username}
                secureTextEntry={true}
                onChangeText={username => setUsername(username)}
            />
            <FormInput
                labelName='Email'
                value={email}
                autoCapitalize='none'
                onChangeText={userEmail => setEmail(userEmail)}
            />
            <FormInput
                labelName='Phone Number'
                value={phone}
                autoCapitalize='none'
                onChangeText={userPhone => setPhone(userPhone)}
            />
            <FormInput
                labelName='About'
                value={about}
                autoCapitalize='none'
                onChangeText={userAbout => setAbout(userAbout)}
            />
            <FormInput
                labelName='Password'
                value={password}
                secureTextEntry={true}
                onChangeText={userPassword => setPassword(userPassword)}
            />
            <FormButton
                title='Signup'
                modeValue='contained'
                labelStyle={styles.loginButtonLabel}
                onPress={() => register(email, password) & handleButtonPress()}
            />
            <IconButton
                icon='keyboard-backspace'
                size={30}
                style={styles.navButton}
                color='#6646ee'
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 24,
        marginBottom: 10,
        color: '#7B44AB'
    },
    loginButtonLabel: {
        fontSize: 22
    },
    navButtonText: {
        fontSize: 18
    },
    navButton: {
        marginTop: 10
    }
});