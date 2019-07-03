import { Input, Item } from 'native-base';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 4px;
`;

export const StyledInput = styled(Input).attrs(props => ({
  blurOnSubmit: true,
  returnKeyType: 'next',
}))`
  font-size: 16px;
  height: ${props => (props.multiline ? 80 : 0)}px;
`;

export const StyledItem = styled(Item).attrs()`
  border-color: ${props => (props.error ? 'red' : props.borderColor)};
  border-width: ${props => (props.borderWidth ? props.borderWidth : 1)}px;
`;

export const Error = styled.View`
  flex: 1;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 12px;
`;
