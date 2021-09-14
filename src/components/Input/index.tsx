import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import {
  Container,
  Icon,
  IconWrapper,
  InputText,
} from './styles';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function Input({ iconName, value, ...rest }: Props){
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false)

  const theme = useTheme()

  function handleOnFocus() {
    setIsOnFocus(true);
  }

  function handleOnBlur() {
    setIsOnFocus(false);
    setIsFilled(!!value);
  }

  return (
    <Container isOnFocus={isOnFocus}>
      <IconWrapper>
        <Icon
          name={iconName}
          color={isOnFocus || isFilled ? theme.colors.main : theme.colors.text_detail}
        />
      </IconWrapper>
      <InputText
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...rest}
      />
    </Container>
  );
}
