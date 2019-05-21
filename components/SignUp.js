import { Body, Container, Content, Header, Left, Right, Subtitle, Text, Title } from 'native-base';
import React from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import CustomForm from './CustomForm';

const SignUp = () => {
	const formFields = [
		[
			{
				name: 'firstName',
				label: 'First Name',
				type: 'text',
				inputProps: {
					autoCorrect: false
				}
			},
			{
				name: 'lastName',
				label: 'Last Name',
				type: 'text',
				inputProps: {
					autoCorrect: false
				}
			}
		],
		[
			{
				name: 'email',
				label: 'Email',
				type: 'text',
				inputProps: {
					autoCorrect: false,
					autoCapitalize: 'none',
					keyboardType: 'email-address'
				}
			}
		],
		[
			{
				name: 'skills',
				label: 'Skills',
				type: 'text',
				inputProps: {
					autoCorrect: false,
					multiline: true,
					numberOfLines: 4,
					blurOnSubmit: false
				}
			}
		],
		[
			{
				name: 'password',
				label: 'Password',
				type: 'text',
				inputProps: {
					secureTextEntry: true
				}
			}
		],
		[
			{
				name: 'subscribe',
				label: 'Subscribe me to weekly news from Tech world.',
				type: 'boolean',
				defaultValue: true
			}
		],
		[
			{
				label: 'Sign Up',
				type: 'button'
			}
		],
		[
			{
				label: 'Reset',
				type: 'button'
			}
		]
	];

	/**
	 * Grab user's input data.
	 */
	handleSubmit = state => {
		const { firstName, lastName, email, skills, password } = state;

		Alert.alert(
			'Your info',
			`First Name: ${firstName}\n Last Name: ${lastName}\n Email: ${email}\n Skills: ${skills} \n Password: ${password}`
		);
	};

	return (
		<Container style={styles.container}>
			<SafeAreaView style={styles.safeArea}>
				{/* <Header noShadow hasSubtitle>
					<Left style={{ flex: 1 }} />
					<Body style={{ flex: 3, justifyContent: 'center' }}>
						<Title span style={{ alignSelf: 'center' }}>
							React Native Form Builder
						</Title>
						<Subtitle style={{ alignSelf: 'center' }}>with Hooks</Subtitle>
					</Body>
					<Right style={{ flex: 1 }} />
				</Header> */}
				<Content>
					<Text style={styles.screenTitle}>Sign Up</Text>
					<CustomForm formFieldsRows={formFields} handleSubmit={handleSubmit} />
				</Content>
			</SafeAreaView>
		</Container>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1
		// backgroundColor: '#3F4EA5'
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 10
		// backgroundColor: '#3F4EA5'
	},
	screenTitle: {
		fontSize: 35,
		textAlign: 'center',
		margin: 10
		// color: '#FFF'
	}
});

export default SignUp;
