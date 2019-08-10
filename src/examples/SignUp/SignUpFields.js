import subjectList from './__mockList';

const formFields = [
  [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
      fieldProps: {
        autoCorrect: false,
      },
    },
    {
      name: 'lastName',
      label: 'Last Name',
      required: true,
      type: 'text',
      fieldProps: {
        autoCorrect: false,
      },
    },
  ],
  [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      fieldProps: {
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
      type: 'text',
      fieldProps: {
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
      fieldProps: {
        submitOnDirty: true,
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
