import React, {useState} from 'react';
import { useTheme } from 'styled-components';
import { format } from 'date-fns';

import ArrowSvg from '../../assets/arrow.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarkedDateProps } from '../../components/Calendar';

import { getPlatformDate} from '../../utils/getPlatformDate'

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { Alert } from 'react-native';
import { CarDTO } from '../../dtos/carDTO';

interface RentalPeriodProps {
  start: number;
  startFormated: string;
  end: number;
  endFormated: string;
}

interface Car {
  car: CarDTO;
}

export function Scheduling({navigation, route}){
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps);

  const theme = useTheme();
  const {car} = route.params as Car;

  function handleConfirm() {
    if(rentalPeriod.start && rentalPeriod.end) {

      navigation.navigate('SchedulingDetails', {
        car,
        rentalPeriod,
        dates: Object.keys(markedDates),
      });
    } else {
      Alert.alert('Escolha o intervalo para alugar.')
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp) {
      start = end;
      end = start
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const lastDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      start: start.timestamp,
      startFormated: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      end: end.timestamp,
      endFormated: format(getPlatformDate(new Date(lastDate)), 'dd/MM/yyyy'),
    })
  }

  return (
    <Container>
      <Header>
        <BackButton color={theme.colors.shape} onPress={handleGoBack} />

        <Title>
          Escolha uma {'\n'}
          data de inicio e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormated}>
              {rentalPeriod.startFormated }
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormated}>
              {rentalPeriod.endFormated}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
      <Calendar onDayPress={handleChangeDate}  markedDates={markedDates}/>
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirm}/>
      </Footer>
    </Container>
  );
}
