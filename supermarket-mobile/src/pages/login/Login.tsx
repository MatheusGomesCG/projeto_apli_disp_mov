import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './LoginStyle'
import Icon from 'react-native-vector-icons/AntDesign';
import home from '../home/Home';

const Login = ({navigation}: any) => {
  const goToPage = (path: String) => {
    navigation.navigate(path)
  }
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Icon name="isv" size={150} color={"#123E57"}></Icon>
        <Text style={styles.title}>Bem-vindo ao seu app de mercado preferido</Text>
      </View>
      <Text>Login</Text>
      <TextInput style={styles.input} />
      <Text>Password</Text>
      <TextInput secureTextEntry={true} style={styles.input} />
      <View style={styles.createForgotLink}>
        <Text onPress={() => {goToPage("createAccount")}} style={styles.link}>Create Account</Text>
        <Text onPress={() => {goToPage("forgotPassword")}} style={styles.link}>Forgot Password</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {goToPage("home")}}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>

  );
};

export default Login