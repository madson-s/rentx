import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.header};

  padding: 24px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(34)}px;
  margin-top: 24px;
`;

export const Subtitle = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.secondary_600};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(34)}px;
  margin-top: 18px;
`;
export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
  background-color: ${({theme}) => theme.colors.shape};
`;
export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 0;
`;
export const AppointmentsTitle = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;
export const AppointmentsQuantity = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;

export const CarWrapper = styled.View`
`;

export const CarFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
  padding: 12px 24px;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const CarFooterTitle = styled.Text`
  color: ${({theme}) => theme.colors.text_detail};
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const CarFooterPriod = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CarFooterDate = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const CarFooterIcon = styled(AntDesign).attrs({
  size: 20,
  color: theme.colors.text_detail,
})`
  margin: 0 10px;
`;

export const CarSeparator = styled.View`
  width: 100%;
  height: 12px;
`;
