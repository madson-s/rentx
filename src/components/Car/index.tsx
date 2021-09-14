import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import GasolineSvg from '../../assets/gasoline.svg';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';


interface CarData {
  brand: string;
  name: string;
  period: string;
  price: number;
  thumbnail: string;
}

interface Props extends RectButtonProps {
  data: CarData;
}

export function Car({data, ...rest}: Props){
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${data.price}`}</Price>
          </Rent>
          <Type>
            <GasolineSvg width={24} height={24}/>
          </Type>
        </About>
      </Details>
      <CarImage source={{ uri: data.thumbnail} } resizeMode="contain" />
    </Container>
  );
}
