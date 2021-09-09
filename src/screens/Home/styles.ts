import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { CarDTO } from '../../dtos/carDTO';
import { RectButton, } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../global/styles/theme';
import Animated from 'react-native-reanimated';

const AnimatedButton = Animated.createAnimatedComponent(RectButton);

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  padding: 32px 24px;
  padding-top: ${getStatusBarHeight() + 32}px;
  justify-content: flex-end;
  background-color: ${({theme}) => theme.colors.header};
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.main_light};
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const CarSeparator = styled.View`
  width: 100%;
  height: 16px;
`;

export const AnimatedButtonWrapper = styled(Animated.View)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({theme}) => theme.colors.main};

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: ${getBottomSpace() + 12}px;
  right: 12px;
`;

export const FloatingButton = styled(AnimatedButton)``;

export const FloatingIcon = styled(Ionicons).attrs({
  size: 32,
  color: theme.colors.shape,
})``;
