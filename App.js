import { Body, Container, Content, Header, Left, Right, Subtitle, Text, Title } from 'native-base';
import React, { Component } from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import CustomForm from './components/CustomForm';

export default class App extends Component {
	getFormFields = () => {
		const inputProps = {
			placeholder: '0',
			autoCapitalize: 'none',
			autoCorrect: false,
			keyboardType: 'numeric',
			returnKeyType: 'done'
		};

		const formFields = [
			[
				{
					name: 'hourlyRate',
					label: 'Hourly Rate',
					type: 'text',
					inputProps
				},
				{
					name: 'hoursPerWeek',
					label: 'Hours / Week',
					type: 'text',
					inputProps
				}
			],
			[
				{
					name: 'daysPerWeek',
					label: 'Days / Week',
					type: 'text',
					inputProps
				}
			],
			[
				{
					label: 'Calculate',
					type: 'button'
				}
			],
			[
				{
					labek: 'Reset',
					type: 'button'
				}
			]
		];

		return formFields;
	};

	/**
	 * Grab user's input data and do the math.
	 */
	handleSubmit = state => {
		// using Javascript object destructuring to
		// get user's input data from the state.
		const { hourlyRate, hoursPerWeek, daysPerWeek } = state;

		const weeksPerYear = 52;
		const hoursPerDay = Math.ceil(parseFloat(hoursPerWeek) / parseFloat(daysPerWeek));
		const weeklyIncome = Math.abs(parseFloat(hourlyRate) * hoursPerDay * parseFloat(daysPerWeek));
		const annualIncome = Math.abs(parseFloat(hourlyRate) * parseFloat(hoursPerWeek) * weeksPerYear);

		// show results
		Alert.alert('Results', `\nWeekly Income: $${weeklyIncome}, \n Annual Income: $${annualIncome}`);
	};

	render() {
		return (
			<Container>
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
						<Text style={styles.screenTitle}>Salary Calculator</Text>
						<CustomForm formFieldsRows={this.getFormFields()} handleSubmit={this.handleSubmit} />
					</Content>
				</SafeAreaView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 10,
		// backgroundColor: '#3F4EA5'
	},
	safeArea: {
		flex: 1
	},
	screenTitle: {
		fontSize: 35,
		textAlign: 'center',
		margin: 10,
		// color: '#FFF'
	}
});
