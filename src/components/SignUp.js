import { Container, Content, Text } from 'native-base';
import React from 'react';
import { Alert, SafeAreaView, StyleSheet } from 'react-native';
import CustomForm from './CustomForm';

const subjectList = [
  {
    label: 'React Native',
    value: 0
  },
  {
    label: 'React Hooks',
    value: 1
  },
  {
    label: 'React Navigation',
    value: 2
  },
  {
    label: 'React News',
    value: 3
  }
];

const SignUp = () => {
  const formFields = [
    [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'input',
        inputProps: {
          autoCorrect: false
        }
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'input',
        inputProps: {
          autoCorrect: false
        }
      }
    ],
    [
      {
        name: 'email',
        label: 'Email',
        type: 'input',
        inputProps: {
          autoCorrect: false,
          autoCapitalize: 'none',
          keyboardType: 'email-address'
        }
      }
    ],
    [
      {
        name: 'subject',
        placeholder: 'Pick a topic of your interest',
        pickerItems: subjectList,
        type: 'picker'
      }
    ],
    [
      {
        name: 'password',
        label: 'Password',
        type: 'input',
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
        name: 'signUpButton',
        label: 'Sign Up',
        type: 'button'
      }
    ],
    [
      {
        name: 'resetButton',
        label: 'Reset',
        type: 'button'
      }
    ]
  ];

  /**
   * Grab user's input data.
   */
  const handleSubmit = (state) => {
    const {
      firstName, lastName, email, subject, password
    } = state;

    Alert.alert(
      'Your info',
      `First Name: ${firstName.value}\n Last Name: ${lastName.value}\n Email: ${
        email.value
      }\n Subject: ${subject.value} \n Password: ${password.value}`
    );
  };

  return (
    <Container style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Content>
          <Text style={styles.textStyle}>Sign Up</Text>
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
    padding: 10
    // backgroundColor: '#3F4EA5'
  },
  textStyle: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10
    // color: '#FFF'
  }
});

export default SignUp;
