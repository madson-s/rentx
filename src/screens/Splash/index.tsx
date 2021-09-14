import React, {useEffect} from 'react';
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import {
  AnimatedWrapper,
  Container
} from './styles';

export function Splash({ navigation }){
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [1, .3, 0]),
      transform: [{
        translateX: interpolate(splashAnimation.value, [0, 50], [0, -50], Extrapolate.CLAMP),
      }],
    }
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, .3, 1]),
      transform: [{
        translateX: interpolate(splashAnimation.value, [0, 50], [-50, 0], Extrapolate.CLAMP),
      }],
    }
  });

  useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      {duration: 1000},
      () => {
        'worklet'
        runOnJS(startApp)();
      }
    );
  }, []);

  function startApp() {
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <AnimatedWrapper style={brandStyle}>
        <BrandSvg width={80} height={50} />
      </AnimatedWrapper>

      <AnimatedWrapper style={logoStyle}>
        <LogoSvg width={180} height={20} />
      </AnimatedWrapper>
    </Container>
  );
}
