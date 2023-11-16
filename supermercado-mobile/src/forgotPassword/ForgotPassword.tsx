import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './ForgotPasswordStyles'; // Certifique-se de ter estilos apropriados

const ForgotPassword = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');

  const handleForgotPassword = () => {
    // Simplesmente exibe uma mensagem, já que não há backend integrado
    alert(`Solicitação de redefinição de senha para: ${emailOrUsername}`);
  };

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.gradient}>
    <View style={styles.container}>
      <View style={styles.logo}>
        <Icon name="isv" size={150} color="#2196F3" />
      </View>
      <Text style={styles.title}>Esqueceu a Senha</Text>
      <Text>Informe seu e-mail ou nome de usuário:</Text>
      <TextInput
        style={styles.input}
        value={emailOrUsername}
        onChangeText={setEmailOrUsername}
        placeholder="E-mail ou Nome de Usuário"
      />
      <Button title="Enviar Solicitação" onPress={handleForgotPassword} />
    </View>
    </LinearGradient>
  );
};

export default ForgotPassword;
