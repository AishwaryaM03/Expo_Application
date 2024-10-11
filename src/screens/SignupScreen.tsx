import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';
import signupStyles from '../styles/signupStyles';

const SignupScreen: React.FC = ({ navigation }) => {
  // State for signup fields: name, mobile number, email, and password
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle signup logic with validation
  const handleSignup = () => {
    if (!name || !mobileNumber || !email || !password) {
      Alert.alert('Validation Error', 'All fields are required');
      return;
    }
    
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Validation Error', 'Invalid email format');
      return;
    }

    // Validate mobile number format (simple validation for demonstration)
    if (mobileNumber.length < 10) {
      Alert.alert('Validation Error', 'Mobile number must be at least 10 digits');
      return;
    }

    // Handle successful signup
    Alert.alert('Sign up successful!');
    // You can add API request logic here
  };

  return (
    <ImageBackground
      source={require('../../assets/background.jpg')}
      style={signupStyles.backgroundImage}
    >
      <View style={signupStyles.container}>
        <Text style={signupStyles.header}>Sign Up</Text>

        {/* Input fields for signup */}
        <TextInput
          style={[signupStyles.input, { fontWeight: 'bold' }]}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#000"
        />

        <TextInput
          style={[signupStyles.input, { fontWeight: 'bold' }]}
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="phone-pad"
          placeholderTextColor="#000"
        />

        <TextInput
          style={[signupStyles.input, { fontWeight: 'bold' }]}
          placeholder="Enter Email ID"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#000"
        />

        <TextInput
          style={[signupStyles.input, { fontWeight: 'bold' }]}
          placeholder="Enter Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#000"
        />

        {/* Signup button */}
        <Button title="Sign Up" onPress={handleSignup} />

        {/* Button to navigate back to login */}
        <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  );
};

// Ensure this is at the very bottom of your file
export default SignupScreen;
