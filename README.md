<p align="center">
  <img width="700"  src="images/form4ulogo.png">

[![NPM Version](https://img.shields.io/npm/v/react-native-form4u.svg?style=flat)](https://www.npmjs.com/package/react-native-form4u)
![Dependencies](https://img.shields.io/david/devrdias/react-native-form4u)
![Downloads](https://img.shields.io/npm/dw/react-native-form4u)
[![Issues](https://img.shields.io/github/issues/devrdias/react-native-form4u)](https://github.com/devrdias/react-native-form4u/issues)
[![Closed issues](https://img.shields.io/github/issues-closed-raw/devrdias/react-native-form4u)](https://github.com/devrdias/react-native-form4u/issues)

# react-native-form4u

## A React Native form builder, simple, light and fast !

- Define [fields](/src/examples/SignUp/SignUpFields.js) using a simple json file. Any kind of react-native field or valid component is accepted;
- Define [field validation](/src/examples/SignUp/SignUpFormValidationRules.js) with the flexibility of using a JavaScript function to return the erros;
- Define your own [callback](/src/examples/SignUp/index.js) function to handle form submission;
- Package comes with a full Sign Up login screen example.

<br/>

---

  <img width="250" src="images/formBlank.png">
  <img width="250" src="images/formFilled.png">
  <img width="250" src="images/formErrors.png">

---

## Features

- Prevents submit dirty forms
- Initialize fields with default values
- Default mask types for most common field types, like datetime, only number, zip code, Brazilian CPF/CNPJ
- Use custom masks with help of [react-native-masked-text](https://github.com/benhurott/react-native-masked-text)
- Supports custom validations
- Implements default validations for common field types (email)
- Define your own style for your form
- Define your own style for your fields
- Uses <a href="https://github.com/GeekyAnts/NativeBase">Nativebase</a> components

---

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
  - [Fields](#fields)
  - [Validation](#validation)
  - [Submit](#submit)
- [Field Types](#field-types)
  - [TextInput](#textinput)
  - [Button](#button)
  - [Picker](#picker)
  - [Switch](#switch)
  - [Date](#date)
  - [Select](#select)
  - [Custom](#custom)
- [Properties](#properties)
  - [Form properties](#form-properties)
  - [Field properties](#field-properties)
- [Sign up form example](/src/examples/SignUp/index.js)

---

## Installation

### Install Peer Dependencies

The peer dependencies included from any npm packages does not automatically get installed. Your application will not depend on it explicitly.

`react-native-form4u` requires a peer of [`native-base`](https://github.com/GeekyAnts/NativeBase)

Install NativeBase

```bash
npm install native-base --save
```

Link the library

```bash
react-native link native-base
```

### Icons

If you have icons problems, please try to install and link [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons)

```bash
npm install --save react-native-vector-icon
```

```bash
react-native link react-native-vector-icons
```

### Install Form4u

```bash
$ npm i react-native-form4u --save
```

## Basic Usage

- Make sure you have react-native installed

```bash
npm i -g react-native
```

---

## Fields

[see more](/src/examples/SignUp/SignUpFields.js)

```javascript
const fields = [
  [
    {
      name: "firstName",
      label: "First Name",
      type: "input",
      inputProps: {
        autoCorrect: false
      }
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "input",
      inputProps: {
        autoCorrect: false
      }
    }
  ],
  [
    {
      name: "email",
      label: "Email",
      type: "input",
      inputProps: {
        autoCorrect: false,
        autoCapitalize: "none",
        keyboardType: "email-address"
      }
    }
  ],
  [
    {
      name: "subject",
      placeholder: "Pick a topic of your interest",
      pickerItems: [
        {
          label: "React Native",
          value: 0
        },
        {
          label: "React Hooks",
          value: 1
        },
        {
          label: "React Navigation",
          value: 2
        },
        {
          label: "React News",
          value: 3
        }
      ],
      type: "picker"
    }
  ],
  [
    {
      name: "password",
      label: "Password",
      type: "input",
      inputProps: {
        secureTextEntry: true
      }
    }
  ],
  [
    {
      name: "subscribe",
      label: "Subscribe me to weekly news from Tech world.",
      type: "boolean",
      defaultValue: true
    }
  ],
  [
    {
      name: "signUpButton",
      label: "Sign Up",
      type: "button"
    }
  ],
  [
    {
      name: "resetButton",
      label: "Reset",
      type: "button"
    }
  ]
];
```

## Validation

[see more](/src/examples/SignUp/SignUpFormValidationRules.js)

```javascript
const validate = ({ firstName, lastName, email, subject, password }) => {
  const errors = {};

  if (!firstName.value) {
    errors.firstName = "First name is required";
  }
  if (!lastName.value) {
    errors.lastName = "Last name is required";
  }

  if (!email.value) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    errors.email = "Email address is invalid";
  }

  if (!subject.value) {
    errors.subject = "A subject of interest is required.";
  }

  if (!password.value) {
    errors.password = "Password is required";
  }

  return errors;
};

export default validate;
```

## Submit

[see more](/src/examples/SignUp/index.js)

- this callback is executed after form submission/validation

```javascript
const handleSubmit = fields => {
  const { firstName, lastName, email, subject, password } = fields;

  Alert.alert(
    "Your info",
    `First Name: ${firstName.value}\n Last Name: ${lastName.value}\n Email: ${
      email.value
    }\n Subject: ${subject.value} \n Password: ${password.value}`
  );
};
```

## [Using the component](/src/examples/SignUp/index.js)

```jsx
<Form4u
  formFieldsRows={fields}
  handleSubmit={handleSubmit}
  validation={validationRules}
  submitOnDirty
/>
```

---

## BACKLOG

- refactor to use styled components
- Implement other field types
- Tests
- Documentation!!!

---

## Version History

### 0.0.1

- remove styled-component from Input from native-base, onChange and onChangeText were not been called
  [see more](https://github.com/GeekyAnts/NativeBase/issues/2692)
- fix errors view which was shrinking in few cases
- implement form validation with error messages
- Implement custom form picker
- Allows form to render any kind of React component
- Added react-native-maked-text to allows masked input texts

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
