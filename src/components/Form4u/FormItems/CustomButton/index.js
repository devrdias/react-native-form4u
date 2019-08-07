import PropTypes from 'prop-types';
import React from 'react';
import { ButtonText, Container, StyledButton } from './styles';
/**
 * A stateless function component which renders a button.
 *
 * @param {obj} props
 */
const CustomButton = (props) => {
  const { children, onPress, disabled } = props;

  return (
    <Container>
      <StyledButton onPress={onPress} disabled={disabled}>
        <ButtonText>{children}</ButtonText>
      </StyledButton>
    </Container>
  );
};

CustomButton.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

CustomButton.defaultProps = {
  onPress: f => f,
  disabled: false,
};

export default CustomButton;
