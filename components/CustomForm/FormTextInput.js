import { Input, Item, Label, View, Text } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

/**
 * A stateless function component which renders a TextInput.
 *
 * @param {obj} props
 */
const FormTextInput = props => {
	const { labelText, multiline, ...inputProps } = props;
	console.log('inputProps: ', inputProps);

	debugger;
	return (
		<View style={styles.inputWrapper}>
			{labelText && <Label style={styles.label}>{labelText}</Label>}
			<Item
				fixedlabel
				// error={errors.email ? true : false}
			>
				<Input
					style={[styles.textInput, multiline && styles.textarea]}
					blurOnSubmit
					{...inputProps}
					multiline={multiline}
				/>
			</Item>

			{/* {errors.email && <Icon type="AntDesign" name="close" />} */}
			{/* <View>
				{errors.email && <Text style={{ color: 'red', fontSize: 12 }}>{errors.email}</Text>}
			</View> */}
		</View>
	);
};

FormTextInput.propTypes = {
	labelText: PropTypes.string,
	multiline: PropTypes.bool
};

FormTextInput.defaultProps = {
	labelText: null,
	multiline: false
};

const styles = StyleSheet.create({
	inputWrapper: {
		flex: 1,
		marginBottom: 15,
		paddingHorizontal: 10
	},
	textInput: {
		height: 40,
		// borderColor: '#FFF',
		borderWidth: 1,
		borderRadius: 3,
		// backgroundColor: '#FFF',
		paddingHorizontal: 10,
		fontSize: 18,
		// color: '#3F4EA5'
	},
	label: {
		// color: '#FFF',
		marginBottom: 5,
		paddingTop: 4
	},
	textarea: {
		height: 80
	}
});

export default FormTextInput;
