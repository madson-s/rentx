import React, {useState} from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { PasswordInput } from '../../../components/PasswordInput';
import { api } from '../../../server/api';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  FormTitle,
  Steps,
} from './styles';

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}

export function SignUpSecondStep({navigation, route}){

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword]= useState('');

  const { user } = route.params as Params;

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    if(!password || !confirmPassword) {
      return Alert.alert('Informe a senha e a confirmação.')
    }

    if(password !== confirmPassword) {
      return Alert.alert('As senhas não são iguais.')
    }

    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.driverLicense,
      password,
    }).then(() => {
      navigation.navigate('Confirmation', {
        title: 'Conta Criada!',
        message: `Agora é só fazer login \n e aproveitar`,
        nextScreenName: 'SignIn',
      });
    }).catch(() => {
      Alert.alert("Opa", "Não foi possível cadastrar.");
    })

  }
  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton color="dark" onPress={handleGoBack}/>
            <Steps>
              <Bullet />
              <Bullet active/>
            </Steps>
          </Header>
          <Title>
            Crie sua{'\n'}
            conta
          </Title>
          <Subtitle>
            Faça seu cadastro de{'\n'}
            forma rápida e fácil
          </Subtitle>
          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
              />

            <PasswordInput
              iconName="lock"
              placeholder="Repetir Senha"
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              />
          </Form>

          <Button
            title="Cadastrar"
            onPress={handleRegister}
            color="success"
            />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
