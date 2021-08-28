import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const Header = styled.View`
  width: 100%;
  padding: 32px 24px;
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

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;
