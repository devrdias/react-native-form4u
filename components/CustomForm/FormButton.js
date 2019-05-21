import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

/**
 * A stateless function component which renders a button.
 *
 * @param {obj} props
 */
const FormButton = props => {
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
		backgroundColor: '#FD6592',
		borderRadius: 3,
		height: 40,
		marginHorizontal: 10,
		marginBottom: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		// color: '#FFF',
		fontWeight: 'bold',
		fontSize: 16
	},
	buttonDisabled: {
		opacity: 0.5
	}
});

export default FormButton;
