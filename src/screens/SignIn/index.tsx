import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup'

import { useAuth } from '../../hook/auth';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { LightButton } from '../../components/LightButton';
import { PasswordInput } from '../../components/PasswordInput';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  Footer,
} from './styles';

export function SignIn({ navigation }){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignUp() {
    navigation.navigate('SignUpFirstStep');
  }

  async function handleLogin() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório.')
          .email('Digite um e-mail válido.'),
        password: Yup.string()
          .required('Senha é obrigatória.')
      });

      await schema.validate({ email, password });
      signIn({email, password});
    } catch (error) {
      if(error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
        <StatusBar
          style="dark"
          backgroundColor="transparent"
          translucent
        />
          <Header>
            <Title>
              Estamos{'\n'}
              quase lá
            </Title>
            <Subtitle>
              Faça login para começar{'\n'}
              uma experinência incrível
            </Subtitle>
          </Header>
          <Form>
            <Input
              value={email}
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
            />
            <PasswordInput
              value={password}
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
            />
          </Form>
          <Footer>
            <Button title="Login" onPress={handleLogin}/>
            <LightButton
              title="Criar conta gratuíta"
              onPress={handleSignUp}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
