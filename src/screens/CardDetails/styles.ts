import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const AnimatedHeaderWrapper = styled(Animated.View)`
  background-color: ${({theme}) => theme.colors.background_secondary};
  margin-top: ${getStatusBarHeight()}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  height: 30px;
  margin-top: ${getStatusBarHeight()}px;
  margin-left: 24px;
`;

export const CarImages = styled(Animated.View)`
  margin-top: ${getStatusBarHeight() + 18}px;
`;

export const Content = styled(Animated.ScrollView).attrs({
  contentContainerStyle: {
    padding: 24,
    alignItens: 'center',
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 38px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.main};
  font-size: ${RFValue(25)}px;
`;


export const Accessotries = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`;

export const About = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  text-align: justify;

  margin-top: 24px;
  line-height: ${RFValue(25)}px;
`;

export const Footer = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background_secondary};

  padding: 24px 24px ${getBottomSpace() + 24}px;
`;
