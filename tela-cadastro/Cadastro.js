
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, View, Image } from 'react-native';

export default function Cadastro({ onNavigateToMain }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPressed, setIsPressed] = useState(false);

  const handleRegister = () => {
  
    setIsPressed(false);
  };

  return (
    <SafeAreaView style={styles.body}>
      <Image source={require('./assets/Inova.png')} style={styles.logo} />
      <Text style={styles.paragraph}>Cadastro</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Nome de usuário"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Endereço de e-mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.button, isPressed && styles.buttonPressed]}
        onPress={handleRegister}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Registrar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onNavigateToMain}>
        <Text style={styles.link}>Voltar para a Tela Principal</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Desenvolvido por Abner Lessa</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#3261a8',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 50,
    borderWidth: 3,
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 16,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#dedede',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderWidth: 1,
    padding: 10,
    width: 200,
    marginTop: 25,
  },
  buttonPressed: {
    backgroundColor: 'black',
  },
  buttonContent: {
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
  },
  link: {
    marginTop: 20,
    color: 'red',
    textDecorationLine: 'underline',
  },
  footer: {
    marginTop: 30,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: 'black',
  },
});