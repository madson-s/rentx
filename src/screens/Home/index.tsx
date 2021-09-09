import React, {useEffect, useState} from 'react';
import { Alert, BackHandler } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { LoadingAnimation } from '../../components/LoadingAnimation';
import { CarDTO } from '../../dtos/carDTO';
import { api } from '../../server/api';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
  CarSeparator,
  FloatingButton,
  FloatingIcon,
  AnimatedButtonWrapper,
} from './styles';

export function Home({navigation}){

  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const myCarsButtonStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: positionX.value},
        {translateY: positionY.value},
      ],
    }
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any){
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any){
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd(){
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  useEffect(() => {
    async function fetchCars() {
      try{
        const response = await api.get('/cars');
        setCars(response.data);
        setIsLoading(false);
      } catch (error) {
        Alert.alert('Ocorreu um erro tente novamente mais tarde.')
      }
    }

    fetchCars();
  },[]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    })
  }, []);

  function handleCardDetails(car: CarDTO) {
    navigation.navigate('CardDetails', {car});
  }

  function handleMyCars() {
    navigation.navigate('MyCars');
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          {!isLoading && (
            <TotalCars>
              Total de {cars.length} carros
            </TotalCars>
          )}
        </HeaderContent>
      </Header>
      {!isLoading ? (
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
      ) : (
        <LoadingAnimation />
      )}
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <AnimatedButtonWrapper style={myCarsButtonStyles}>
          <FloatingButton onPress={handleMyCars}>
            <FloatingIcon name="car" />
          </FloatingButton>
        </AnimatedButtonWrapper>
      </PanGestureHandler>
    </Container>
  );
}
