import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaPrincipal({ onNavigateToSignup, onNavigateToLogin, onNavigateToForgotPassword, onNavigateToGroup }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Tela Principal</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onNavigateToSignup}
      >
        <Text style={styles.buttonText}>Ir para Cadastro </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}
        onPress={onNavigateToForgotPassword}
    > 
       <Text style={styles.buttonText}>Esqueci minha Senha</Text>
 </TouchableOpacity>
 
      <TouchableOpacity
        style={styles.button}
        onPress={onNavigateToLogin}
      >
        <Text style={styles.buttonText}>Ir para Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3261a8',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 7,
    borderRadius: 5,
    marginBottom: 50,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});