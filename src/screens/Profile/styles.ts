import { Feather } from '@expo/vector-icons';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: 227px;
  background-color: ${({theme}) => theme.colors.header};
  padding: 0 24px;
  align-items: center;
`;

export const HeaderTop = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-top: ${getStatusBarHeight() + 32}px;
`;

export const HeaderTitle = styled.Text`
  color: ${({theme}) => theme.colors.background_secondary};
  font-family: ${({theme}) => theme.fonts.secondary_600};
  font-size: ${RFValue(25)};
`;

export const SignOutButton = styled(BorderlessButton)``;

export const SignOutIcon = styled(Feather).attrs(({theme}) => ({
  color: theme.colors.shape,
  size: 24,
}))``;

export const PhotoContainer = styled.View`
  width: 180px;
  height: 180px;

  border-radius: 90px;

  background-color: ${({theme}) => theme.colors.background_secondary};
  margin-top: 48px;
`;

export const Photo = styled.Image`
  width: 180px;
  height: 180px;

  border-radius: 90px;
`;

export const PhotoButton = styled(RectButton)`
  position: absolute;
  right: 10px;
  bottom: 10px;

  width: 50px;
  height: 50px;

  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.main};
`;

export const PhotoButtonIcon = styled(Feather).attrs(({theme}) => ({
  color: theme.colors.shape,
  size: 30,
}))``;
