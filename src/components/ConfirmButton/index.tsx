import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import {
  Container,
  Tittle,
} from './styles';

interface Props extends RectButtonProps{
  title: string;
}

export function ConfirmButton({title, ...rest}: Props){
  return (
    <Container {...rest}>
      <Tittle>{title}</Tittle>
    </Container>
  );
}
