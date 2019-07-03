import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-bottom: 15px;
  padding: 0 4px;
  flex-direction: row;
  align-items: center;
`;

export const SwitchText = styled.Text`
  flex: 1;
  color: ${props => (props.color ? props.color : '#FFF9')};
  margin-left: 10px;
`;
