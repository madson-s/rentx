import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Icon,
} from './styles';

interface Props extends BorderlessButtonProps{
  color: 'dark' | 'light';
}

export function BackButton({color, ...rest}: Props){
  return (
    <Container {...rest}>
      <Icon name="chevron-left" color={color}/>
    </Container>
  );
}
