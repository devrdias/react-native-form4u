import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity, Text, StyleSheet, View
} from 'react-native';

/**
 * A stateless function component which renders a button.
 *
 * @param {obj} props
 */
const FormButton = (props) => {
  const { children, onPress, disabled } = props;

  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={[styles.button, disabled && styles.buttonDisabled]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

FormButton.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

FormButton.defaultProps = {
  onPress: f => f,
  disabled: false
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1
  },
  button: {
    backgroundColor: '#0E80DA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    height: 53
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff'
    // fontFamily: "OpenSans-SemiBold"
  },
  buttonDisabled: {
    opacity: 0.5
  }
});

export default FormButton;
