import React from 'react';
import { BackButton } from '../../components/BackButton';

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  SignOutButton,
  SignOutIcon,
  PhotoContainer,
  Photo,
  PhotoButton,
  PhotoButtonIcon,
} from './styles';

export function Profile(){
  return (
    <Container>
      <Header>
        <HeaderTop>
          <BackButton color="light"/>
          <HeaderTitle>Editar Perfil</HeaderTitle>
          <SignOutButton>
            <SignOutIcon name="power"/>
          </SignOutButton>
        </HeaderTop>
        <PhotoContainer>
          <Photo source={{uri: "https://avatars.githubusercontent.com/u/69438715?v=4"}}/>
          <PhotoButton>
            <PhotoButtonIcon name="camera"/>
          </PhotoButton>
        </PhotoContainer>
      </Header>
    </Container>
  );
}
