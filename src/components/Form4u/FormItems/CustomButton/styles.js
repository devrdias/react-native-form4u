import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 4px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: #0e80da;
  justify-content: center;
  align-items: center;
  border-radius: 6;
  height: 53;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #fff;
`;
