import React from 'react';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

interface Props {
  imagesUrl: string[];
}

export function ImagesSlider({ imagesUrl }: Props){
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true}/>
        <ImageIndex active={true}/>
        <ImageIndex active={true}/>
        <ImageIndex active={true}/>
      </ImageIndexes>
      <CarImageWrapper>
        <CarImage
          source={{ uri: imagesUrl[0]}}
          resizeMode="contain"
        />
      </CarImageWrapper>
    </Container>
  );
}
