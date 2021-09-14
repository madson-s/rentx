import styled from 'styled-components/native';

interface ContainerProps {
  active: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-left: 4px;
  background-color: ${({theme, active}) => active ? theme.colors.title : theme.colors.shape};
`;
