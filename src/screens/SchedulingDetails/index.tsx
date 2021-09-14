import { RFValue } from 'react-native-responsive-fontsize';
import { Accessory } from '../../components/Accessory';
import { Feather } from '@expo/vector-icons';
import { Alert } from 'react-native';
import React, {useState} from 'react';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { ImagesSlider } from '../../components/ImagesSlider';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import theme from '../../global/styles/theme';
import { CarDTO } from '../../dtos/carDTO';
import { api } from '../../server/api';

import {
  Container,
  Header,
  CarImages,
  Content,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Details,
  Accessotries,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  Footer,
} from './styles';

interface RentalPeriodProps {
  start: number;
  startFormated: string;
  end: number;
  endFormated: string;
}

interface ParamsPros {
  car: CarDTO;
  rentalPeriod: RentalPeriodProps;
  dates: string[];
}

export function SchedulingDetails({navigation, route}){

  const [isLoading, setIsLoading] = useState(true);
  const {car, rentalPeriod, dates} = route.params as ParamsPros;


  const days = dates.length;

  const total = days * car.price;

  async function handleConfirm() {
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = {
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    }

    api.post('/schedules_byuser', {
      user_id: 1,
      car,
      startDate: rentalPeriod.startFormated,
      endDate: rentalPeriod.endFormated,
    })

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates,
    })
    .then(() => navigation.navigate('Confirmation', {
      title: 'Carro alugado!',
      message: `Agora você só precisa ir \n até a concessionária da RENTX \n pegar o seu automóvel.`,
      nextScreenName: 'Home'
    }))
    .catch(() => Alert.alert("Não foi possível confirmar o agendamento"));
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton color="dark" onPress={handleGoBack}/>
      </Header>
      <CarImages>
        <ImagesSlider
          imagesUrl={car.photos}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>
              {car.brand}
            </Brand>
            <Name>
              {car.name}
            </Name>
          </Description>
          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {car.price}</Price>
          </Rent>
        </Details>
        <Accessotries>
          {car.accessories.map(accessory =>
              <Accessory
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}
              />
            )}
        </Accessotries>
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(15)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.startFormated}</DateValue>
          </DateInfo>
          <Feather
            name='chevron-right'
            size={RFValue(15)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.endFormated}</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ {car.price} x{days} diária{days > 1 && 's'}</RentalPriceQuota>
            <RentalPriceTotal>R$ {total}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title="Alugar agora" isLoading={isLoading} onPress={handleConfirm}/>
      </Footer>
    </Container>
  );
}
