import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import {
  Container
} from './styles';

interface Props extends BorderlessButtonProps{
  color: string;
  onPress: () => void;
}

export function BackButton({color, onPress, ...rest}: Props){
  return (
    <Container {...rest} onPress={onPress}>
      <MaterialIcons name="chevron-left" size={24} color={color}/>
    </Container>
  );
}
