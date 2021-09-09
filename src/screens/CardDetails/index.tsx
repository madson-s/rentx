import React from 'react';
import { Accessory } from '../../components/Accessory';
import {StatusBar} from 'react-native';
import { BackButton } from '../../components/BackButton';
import {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';

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
  AnimatedHeaderWrapper,
} from './styles';
import { CarDTO } from '../../dtos/carDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface Car {
  car: CarDTO;
}

export function CardDetails({navigation, route}){

  const {car} = route.params as Car;

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  })

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP,
      )
    }
  });

  const sliderCarStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 150],
        [1, 0],
        Extrapolate.CLAMP,
      )
    }
  });

  function handleConfirm() {
    navigation.navigate('Scheduling', {car});
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <AnimatedHeaderWrapper style={headerStyleAnimation}>
        <Header>
          <BackButton color={'red'} onPress={handleGoBack}/>
        </Header>
        <CarImages style={sliderCarStyleAnimation}>
          <ImagesSlider
            imagesUrl={car.photos}
          />
        </CarImages>
      </AnimatedHeaderWrapper>

      <Content
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
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
