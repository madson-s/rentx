import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled(BorderlessButton)``;

export const Icon = styled(MaterialIcons).attrs(({color, theme}) => {
  return {
    color: color === 'dark' ? theme.colors.title : theme.colors.shape,
    size: 24,
  };
})``;
