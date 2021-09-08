import React from 'react';
import { Accessory } from '../../components/Accessory';

import { BackButton } from '../../components/BackButton';
import { ImagesSlider } from '../../components/ImagesSlider';
import { Button } from '../../components/Button';

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
  About,
  Accessotries,
  Footer,
} from './styles';
import { CarDTO } from '../../dtos/carDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface Car {
  car: CarDTO;
}

export function CardDetails({navigation, route}){

  const {car} = route.params as Car;

  function handleConfirm() {
    navigation.navigate('Scheduling', {car});
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton color={'red'} onPress={handleGoBack}/>
      </Header>
      <CarImages>
        <ImagesSlider
          imagesUrl={car.photos}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
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
        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button title="Adicionar" onPress={handleConfirm}/>
      </Footer>
    </Container>
  );
}
