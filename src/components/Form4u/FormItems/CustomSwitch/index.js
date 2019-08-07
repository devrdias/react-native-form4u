import PropTypes from 'prop-types';
import React from 'react';
import { Switch } from 'react-native';
import { Container, SwitchText } from './styles';
/**
 * A stateless function component which renders a Boolean input (Switch).
 *
 * @param {obj} props
 */
const CustomSwitch = (props) => {
  const { labelText, ...inputProps } = props;

  return (
    <Container>
      <Switch {...inputProps} />
      <SwitchText>{labelText}</SwitchText>
    </Container>
  );
};

CustomSwitch.propTypes = {
  labelText: PropTypes.string,
};

CustomSwitch.defaultProps = {
  labelText: ' ',
};

export default CustomSwitch;
