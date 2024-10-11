import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ImageBackground, Alert,
} from 'react-native';
import loginStyles from '../styles/loginStyles';

const LoginScreen = ({ navigation }) => {
  // State for email and password input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle login logic by sending credentials to the backend
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Validation Error', 'Email and Password are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Navigate to HomeScreen upon successful login
        navigation.navigate('Home');
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'An error occurred while logging in');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={loginStyles.backgroundImage}
    >
      <View style={loginStyles.container}>
        <Text style={loginStyles.header}>Login</Text>

        {/* Input fields for email and password */}
        <TextInput
          style={[loginStyles.input, { fontWeight: 'bold' }]}
          placeholder="Email ID"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#000"
        />
        <TextInput
          style={[loginStyles.input, { fontWeight: 'bold' }]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#000"
        />

        {/* Login button */}
        <TouchableOpacity
          style={loginStyles.loginButton}
          onPress={handleLogin}
        >
          <Text style={loginStyles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Navigation link to the signup screen */}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={loginStyles.linkText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
