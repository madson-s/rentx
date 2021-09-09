import React, {useState, useEffect} from 'react';
import { ActivityIndicator, Alert, FlatList } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { LoadingAnimation } from '../../components/LoadingAnimation';
import { CarDTO } from '../../dtos/carDTO';
import theme from '../../global/styles/theme';
import { api } from '../../server/api';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPriod,
  CarFooterDate,
  CarFooterIcon,
  CarSeparator,
} from './styles';

interface CarProps {
  car: CarDTO;
  id: string;
  user_id: string;
  startDate: string;
  endDate: string;
}

export function MyCars({navigation}){
  const [cars, setCars] = useState<CarProps[]>([] as CarProps[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        const myCars = response.data;
        setCars(myCars);
      } catch {
        Alert.alert('Não foi possível buscar suas locações.');
      }finally {
        setIsLoading(false);
      }
    }
    fetchCars();
  }, [])

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton color={theme.colors.shape} onPress={handleGoBack} />

        <Title>
          Seus agendamentos {'\n'}
          estão aqui
        </Title>

        <Subtitle>
          Conforto, segurança e privacidade
        </Subtitle>
      </Header>
      {isLoading ? (
        <LoadingAnimation />
       ) : (
         <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{String(cars.length).padStart(2, '0')}</AppointmentsQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>
            <CarWrapper>
                <Car data={item.car} enabled={false}/>
                <CarFooter>
                  <CarFooterTitle>Periodo</CarFooterTitle>
                  <CarFooterPriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <CarFooterIcon name="arrowright"/>
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPriod>
                </CarFooter>
              </CarWrapper>
            }
            ItemSeparatorComponent={({ highlighted }) =>
            <CarSeparator />
          }
          />
        </Content>
      )}
    </Container>
  );
}
