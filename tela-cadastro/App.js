import React, { useState } from 'react';
import TelaPrincipal from './TelaPrincipal';
import Cadastro from './Cadastro';
import EsqueciSenha from './EsqueciSenha';
import Login from './Login';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Main');

  const navigateToSignup = () => setCurrentScreen('Signup');
  const navigateToForgotPassword = () => setCurrentScreen('ForgotPassword');
  const navigateToLogin = () => setCurrentScreen('Login');
  const navigateToMain = () => setCurrentScreen('Main');


  return (
    <>
      {currentScreen === 'Main' && (
        <TelaPrincipal
          onNavigateToSignup={navigateToSignup}
          onNavigateToForgotPassword={navigateToForgotPassword}
          onNavigateToLogin={navigateToLogin}

        />
      )}
      {currentScreen === 'Signup' && <Cadastro onNavigateToMain={navigateToMain} />}
      {currentScreen === 'ForgotPassword' && <EsqueciSenha onNavigateToMain={navigateToMain} />}
      {currentScreen === 'Login' && <Login onNavigateToMain={navigateToMain} />}
    </>
  );
}
