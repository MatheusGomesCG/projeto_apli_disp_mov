import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './CreateAccountStyles'; // Certifique-se de ter estilos apropriados

const CreateAccount = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = () => {
    // Simplesmente navega de volta para a tela de login
    navigation.navigate('login');
  };

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.gradient}>
    <View style={styles.container}>
      <View style={styles.logo}>
        <Icon name="isv" size={150} color="#2196F3" />
      </View>
      <Text style={styles.title}>Criar Conta</Text>
      <Text>Nome de Usuário</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Digite seu nome de usuário"
      />
      <Text>Senha</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Digite sua senha"
      />
      <Text>Confirmar Senha</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
        placeholder="Confirme sua senha"
      />
      <Button title="Criar Conta" onPress={handleCreateAccount} />
      <Text onPress={() => navigation.navigate('login')} style={styles.link}>
        Já tem uma conta? Faça login!
      </Text>
    </View>
    </LinearGradient>
  );
};

export default CreateAccount;


