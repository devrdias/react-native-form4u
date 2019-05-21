import React from 'react';
import PropTypes from 'prop-types';
import { View, Switch, Text, StyleSheet } from 'react-native';

/**
 * A stateless function component which renders a Boolean input (Switch).
 *
 * @param {obj} props
 */
const FormBooleanInput = props => {
	const { labelText, ...inputProps } = props;

	return (
		<View style={styles.switchWrapper}>
			<Switch {...inputProps} />
			{labelText && <Text style={styles.label}>{labelText}</Text>}
		</View>
	);
};

FormBooleanInput.propTypes = {
	labelText: PropTypes.string
};

FormBooleanInput.defaultProps = {
	labelText: null
};

const styles = StyleSheet.create({
	switchWrapper: {
		flex: 1,
		marginBottom: 15,
		paddingHorizontal: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	label: {
		flex: 1,
		// color: '#FFF',
		marginLeft: 10
	}
});

export default FormBooleanInput;
