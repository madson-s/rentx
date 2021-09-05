import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles';

export function Home({navigation}){

  function handleCardDetails() {
    navigation.navigate('CardDetails');
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[{brand: 'AUDI', name: 'RS 5 Coupé', rent: { period: 'ao dia', price: 200.00}, thumbnail: 'http://'}]}
        renderItem={({item}) =><Car data={item} onPress={handleCardDetails}/>}
      />
    </Container>
  );
}
