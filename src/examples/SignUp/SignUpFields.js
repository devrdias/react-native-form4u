import subjectList from './__mockList';

const formFields = [
  [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'input',
      inputProps: {
        autoCorrect: false,
      },
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'input',
      inputProps: {
        autoCorrect: false,
      },
    },
  ],
  [
    {
      name: 'email',
      label: 'Email',
      type: 'input',
      inputProps: {
        autoCorrect: false,
        autoCapitalize: 'none',
        keyboardType: 'email-address',
      },
    },
  ],
  [
    {
      name: 'subject',
      placeholder: 'Pick a topic of your interest',
      pickerItems: subjectList,
      type: 'picker',
    },
  ],
  [
    {
      name: 'password',
      label: 'Password',
      type: 'input',
      inputProps: {
        secureTextEntry: true,
      },
    },
  ],
  [
    {
      name: 'subscribe',
      label: 'Subscribe me to weekly news from Tech world.',
      type: 'boolean',
      defaultValue: true,
    },
  ],
  [
    {
      name: 'signUpButton',
      label: 'Sign Up',
      type: 'button',
      buttonProps: {
        preventSubmitOnDirty: false,
      },
    },
  ],
  [
    {
      name: 'resetButton',
      label: 'Reset',
      type: 'button',
    },
  ],
];

export default formFields;
