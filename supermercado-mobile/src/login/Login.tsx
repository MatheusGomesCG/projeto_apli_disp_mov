import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './LoginStyles';

const Login = ({ navigation }: any) => {
  const goToPage = (path: string) => {
    navigation.navigate(path);
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'Teste' && password === 'teste') {
      navigation.navigate('home');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.gradient}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Icon name="isv" size={150} color="#2196F3" />
          <Text style={styles.text}> Rede Compre Muito </Text>
        </View>
        <Text>Login</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Nome de Usuário"
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Senha"
        />
        <View style={styles.createForgotLink}>
          <Text onPress={() => goToPage('createAccount')} style={styles.link}>
            Cadastrar
          </Text>
          <Text onPress={() => goToPage('forgotPassword')} style={styles.link}>
            Esqueceu a Senha?
          </Text>
        </View>
        <Button title="Enviar" onPress={handleLogin} />
      </View>
    </LinearGradient>
  );
};

export default Login;

