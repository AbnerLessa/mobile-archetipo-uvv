
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function EsqueciSenha({ onNavigateToMain }) {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSendLink = () => {
 
    setIsSent(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      {!isSent ? (
        <>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Endereço de e-mail"
            keyboardType="email-address"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSendLink}
          >
            <Text style={styles.buttonText}>Enviar Link de Recuperação</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.message}>Link de recuperação enviado para seu e-mail.</Text>
      )}
      <TouchableOpacity onPress={onNavigateToMain}>
        <Text style={styles.link}>Voltar para a Tela Principal</Text>
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
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
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
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  message: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  link: {
    marginTop: 20,
    color: 'red',
    textDecorationLine: 'underline',
  },
})