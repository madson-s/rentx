import React, {useState} from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import * as Yup from 'yup';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  FormTitle,
  Steps,
} from './styles';

export function SignUpFirstStep({ navigation }){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [driverLicense, setDriverLicense] = useState('');

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        name: Yup.string()
          .required('Nome é obrigatório.'),
        email: Yup.string()
          .required('E-mail é obrigatório.')
          .email('Digite um E-mail válido.'),
        driverLicense: Yup.string()
          .required('CNH é obrigatório.')
      })
      const user = { name, email, driverLicense, };
      await schema.validate(user)
      navigation.navigate('SignUpSecondStep', {user});
    } catch (error) {
      if(error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message);
      } else {
        Alert.alert('Occorreu um erro durante o cadastro.');
      }
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton color="dark" onPress={handleGoBack}/>
            <Steps>
              <Bullet active/>
              <Bullet />
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
            <FormTitle>1. Dados</FormTitle>
            <Input
              iconName="user"
              placeholder="Nome"
              onChangeText={setName}
              value={name}
              />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={setEmail}
              value={email}
              />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="numeric"
              onChangeText={setDriverLicense}
              value={driverLicense}
              />
          </Form>

          <Button
            title="Próximo"
            onPress={handleNextStep}
            />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
