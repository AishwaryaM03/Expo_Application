import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';

// Create the stack navigator for navigation between screens
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    // Define the stack navigator and specify the initial screen (Login)
    <Stack.Navigator initialRouteName="Login">
      {/* Stack.Screen defines the different screens in the app */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

// Define the type for navigation stack parameters
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};
