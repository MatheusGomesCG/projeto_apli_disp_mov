import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login/Login';
import CreateAccount from './src/pages/createAccount/CreateAccount';
import ForgotPassword from './src/pages/forgotPassword/ForgotPassword';
import Home from './src/pages/home/Home';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="login" component={Login} />
        <Stack.Screen options={{ title: 'Criar Usuário', headerTintColor: '#000' }} name="createAccount" component={CreateAccount} />
        <Stack.Screen options={{ title: 'Recuperar Senha', headerTintColor: '#000' }} name="forgotPassword" component={ForgotPassword} />
        <Stack.Screen options={{ title: 'Ofertas', headerBackVisible: false , headerTitleAlign: "center"}} name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
