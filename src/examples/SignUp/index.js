import { Container, Content, Text } from 'native-base';
import React from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import Form4u from '../../components/Form4u';
import formFields from './SignUpFields';
import validationRules from './SignUpFormValidationRules';

const SignUp = () => {
  /**
   * Grab user's input data.
   */
  const handleSubmit = (state) => {
    const {
      firstName, lastName, email, subject, password,
    } = state;

    Alert.alert(
      'Your info',
      `First Name: ${firstName.value}\n Last Name: ${lastName.value}\n Email: ${
        email.value
      }\n Subject: ${subject.value} \n Password: ${password.value}`,
    );
  };

  return (
    <Container style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Content>
          <Text style={styles.textStyle}>Sign Up</Text>
          <Form4u
            formFields={formFields}
            handleSubmit={handleSubmit}
            validation={validationRules}
          />
        </Content>
      </SafeAreaView>
    </Container>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // backgroundColor: '#3F4EA5'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    // backgroundColor: '#3F4EA5'
  },
  textStyle: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    // color: '#FFF'
  },
});

export default SignUp;
