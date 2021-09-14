import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
} from './styles';

interface Params {
  title: string;
  message: string;
  nextScreenName: string;
}

export function Confirmation({navigation, route}){

  const { title, message, nextScreenName } = route.params as Params;

  const {width} = useWindowDimensions();

  function handleConfirm() {
    navigation.navigate(nextScreenName);
  }

  return (
    <Container>
      <StatusBar translucent backgroundColor='transparent' style='light' />
      <LogoSvg width={width}/>
      <Content>
        <DoneSvg width={88} height={88}/>
        <Title>{title}</Title>

        <Message>{message}</Message>
      </Content>
      <Footer>
        <ConfirmButton title='OK' onPress={handleConfirm}/>
      </Footer>
    </Container>
  );
}
