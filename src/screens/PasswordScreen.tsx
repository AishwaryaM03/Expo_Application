import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import passwordStyles from '../styles/passwordStyles';

const PasswordScreen = ({ navigation }) => {
  return (
    <View style={passwordStyles.container}>
      <Text style={passwordStyles.header}>Reset Password</Text>
      <TextInput style={passwordStyles.input} placeholder="Current Password" secureTextEntry />
      <TextInput style={passwordStyles.input} placeholder="New Password" secureTextEntry />
      <TextInput style={passwordStyles.input} placeholder="Re-type Password" secureTextEntry />
      <Button title="Save" onPress={() => {}} />
      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default PasswordScreen;
