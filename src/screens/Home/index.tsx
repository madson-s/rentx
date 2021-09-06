import React, {useEffect, useState} from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { CarDTO } from '../../dtos/carDTO';
import { api } from '../../server/api';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
  CarSeparator,
} from './styles';

export function Home({navigation}){

  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try{
        const response = await api.get('/cars');
        setCars(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCars();
  },[]);

  function handleCardDetails(car: CarDTO) {
    navigation.navigate('CardDetails', {car});
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
            Total de {cars.length} carros
          </TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =>
          <Car data={item} onPress={() => handleCardDetails(item)}/>
        }
        ItemSeparatorComponent={({ highlighted }) =>
          <CarSeparator />
        }
      />
    </Container>
  );
}
