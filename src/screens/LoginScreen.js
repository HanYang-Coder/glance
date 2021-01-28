import React, { useState, useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Title } from 'react-native-paper';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import Screen from "../components/Screen";
import { ErrorMessage, Form, FormField, SubmitButton } from "../components/forms";
import { AuthContext } from '../navigation/AuthProvider';

export default function Login({ navigation }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/glancelogo.png")} />
      <Form>
        {/* <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        /> */}
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          onChangeText={userEmail => setEmail(userEmail)}
        />
        <FormInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          onChangeText={userPassword => setPassword(userPassword)}
        />
        <FormButton title="Login"
          labelStyle={styles.loginButtonLabel}
          onPress={() => login(email, password)}
        />
        {/* <FormButton
          title='Login'
          modeValue='contained'
          labelStyle={styles.loginButtonLabel}
          onPress={() => login(email, password)}
        /> */}
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    marginBottom: 10
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10
  },
  loginButtonLabel: {
    fontSize: 22
  },
  navButtonText: {
    fontSize: 14,
    color: '#7B44AB',
  },
  logo: {
    width: 210,
    height: 100,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});