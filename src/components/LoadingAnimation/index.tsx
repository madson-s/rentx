import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

import loadingCar from '../../assets/loading_car.json';

import {
  Container
} from './styles';

export function LoadingAnimation(){
  return (
    <Container>
      <AnimatedLottieView
        source={loadingCar}
        style={{ height: 200 }}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  );
}
