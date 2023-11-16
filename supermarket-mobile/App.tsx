import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/login/Login';
import createAccount from './src/pages/createAccount/createAccount';
import forgotPassword from './src/pages/forgotPassword/forgotPassword';
import Home from './src/pages/home/Home';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="login" component={Login}></Stack.Screen>
        <Stack.Screen options={{headerShown: false}} name="createAccount" component={createAccount}></Stack.Screen>
        <Stack.Screen options={{title: 'Cancelar', headerTintColor: '#000'}} name="forgotPassword" component={forgotPassword}></Stack.Screen>
        <Stack.Screen options={{headerShown: false}} name="home" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
