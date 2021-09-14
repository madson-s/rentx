import { Feather } from '@expo/vector-icons';
import React ,{useState} from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';


import {
  Container,
  Icon,
  IconWrapper,
  InputText,
  ChangePasswordVisibiliteButton
} from './styles';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: Props){
  const [isPasswrodVisible, setIsPasswrodVisible] = useState(false)
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

  function handlePasswordVisibilityChange() {
    setIsPasswrodVisible(prevState => !prevState);
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
        secureTextEntry={!isPasswrodVisible}
        {...rest}
      />
      <ChangePasswordVisibiliteButton
        onPress={handlePasswordVisibilityChange}
      >
        <Icon
          name={isPasswrodVisible ? "eye-off" : "eye"}
          color={theme.colors.text_detail}
          />
      </ChangePasswordVisibiliteButton>
    </Container>
  );
}
