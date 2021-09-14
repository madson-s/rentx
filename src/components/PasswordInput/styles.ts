import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import theme from '../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface OnFocusProps {
  isOnFocus: boolean;
}

export const Container = styled.View<OnFocusProps>`
  width: 100%;
  height: 55px;
  flex-direction: row;
  margin-bottom: 8px;
  background-color: ${({theme}) => theme.colors.background_secondary};
  border-bottom-width: 2px;
  border-color: ${({ theme, isOnFocus }) => isOnFocus ? theme.colors.main : 'transparent'};
`;

export const IconWrapper = styled.View`
  width: 55px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather).attrs({
  size: 24,
})``;

export const InputText = styled(TextInput)`
  flex: 1;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  padding: 0 24px;
`;

export const ChangePasswordVisibiliteButton = styled(BorderlessButton)`
  width: 55px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
