import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // Ensures the image covers the entire background
        justifyContent: 'center',
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent overlay for better readability
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    width: '75%',
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 14,
    borderColor: '#ccc',
    borderWidth: 2,
  },
  loginButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    color: '#1E90FF',
    marginTop: 10,
    fontSize: 20,
  },
});
