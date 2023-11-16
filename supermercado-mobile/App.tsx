// App.tsx

import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/login/Login';
import CreateAccount from './src/createAccount/CreateAccount';
import ForgotPassword from './src/forgotPassword/ForgotPassword';
import Home from './src/home/Home';
import Carrinho from './src/home/Carrinho';

const Stack = createNativeStackNavigator();

const App: FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="createAccount"
          component={CreateAccount}
          options={{ title: 'Criar Usuario', headerTintColor: "#000" }}
        />
        <Stack.Screen
          name="forgotPassword"
          component={ForgotPassword}
          options={{ title: 'Recuperar Senha', headerTintColor: "#000" }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: 'Produtos', headerTintColor: "#000" }}
        />
        <Stack.Screen
          name="carrinho"
          component={Carrinho}
          options={{ title: 'Carrinho', headerTintColor: "#000" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;






