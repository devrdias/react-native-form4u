import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import Form4u from 'react-native-form4u';
import formFields from './testFields';
import validationRules from './validationRules';

const Test = () => {
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
    <Form4u
      formFields={formFields}
      handleSubmit={handleSubmit}
      validation={validationRules}
      submitOnDirty
    />
  );
};

export default Test;
