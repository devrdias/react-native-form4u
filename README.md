<p align="center">
  <img width="700"  src="images/form4ulogo.png">

[![NPM Version](https://img.shields.io/npm/v/react-native-form4u.svg?style=flat)](https://www.npmjs.com/package/react-native-form4u)
[![Build](https://img.shields.io/appveyor/ci/devrdias/react-native-form4u)](https://www.npmjs.com/package/react-native-form4u/build)
![Dependencies](https://img.shields.io/david/devrdias/react-native-form4u)
![Downloads](https://img.shields.io/npm/dt/react-native-form4u)
[![Issues](https://img.shields.io/github/issues/devrdias/react-native-form4u)](https://github.com/devrdias/react-native-form4u/issues)
[![Closed issues](https://img.shields.io/github/issues-closed-raw/devrdias/react-native-form4u)](https://github.com/devrdias/react-native-form4u/issues)

# react-native-form4u

</p>

<p align="center">
<br/>
<b>A React Native form builder, simple, light and fast !</b>

- Define [fields](/src/screens/SignUp/SignUpFields.js) using a simple json file. Any kind of react-native field or valid component is accepted;

- Define [field validation](/src/screens/SignUp/SignUpFormValidationRules.js) with the flexibility of using a JavaScript function to return the erros;

- Define your own [callback](/src/screens/SignUp/index.js) function to handle form submission;

- Package comes with a full Sign Up login screen example.

</p>

---

<p align="center">
  <img width="250"  src="images/formBlank.png">
  <img width="250"  src="images/formFilled.png">
  <img width="250"  src="images/formErrors.png">
</p>

---

## Features

- Prevents submit dirty forms
- Use custom masks for input fields with help of [react-native-masked-text](https://github.com/benhurott/react-native-masked-text)
- Supports custom validations
- Define your own style for your fields or use default
- Uses <a href="https://github.com/GeekyAnts/NativeBase">Nativebase</a> components

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Properties](#properties)
  - [Basic](#basic)
  - [Methods](#methods)
  * [Form Fields](#form-fields)
    - [Field Structure](#field-structure)
    - [Common Properties to all Fields](#common-properties-to-all-fields)
    * [Field Types](#field-types)
      - [TextInput](#textinput)
      - [Picker](#picker)
      - [Switch](#switch)
      - [Date](#date)
      - [Select](#select)
  - [Add Form Validations](#add-custom-validations)
  - [Add custom components](#add-custom-components)
- [Example](#example)

## [Defining Fields](/src/screens/SignUp/SignUpFields.js)

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

## [Defining form validation](/src/screens/SignUp/SignUpFormValidationRules.js) rules by field

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

## [Declaring callback](/src/screens/SignUp/index.js) to be executed after form submission/validation

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

## [Using the component](/src/screens/SignUp/index.js)

```JSX
<Form4u
  formFieldsRows={fields}
  handleSubmit={handleSubmit}
  validation={validationRules}
/>
```

---

## BACKLOG

- refactor to use styled components
- Implement other field types
- Tests
- Documentation!!!

---

## VERSION HISTORY

### 0.0.1

- remove styled-component from Input from native-base, onChange and onChangeText were not been called
  [see more](https://github.com/GeekyAnts/NativeBase/issues/2692)
- fix errors view which was shrinking in few cases
- implement form validation with error messages
- Implement custom form picker
- Allows form to render any kind of React component
- Added react-native-maked-text to allows masked input texts

---

## CONTRIBUTING

Any kind o help is appreciated, so please let's grow the community together.

If you would like to contribute whith this project somehow, please read
[CONTRIBUTING](CONTRIBUTING.md)

## License

This project is licensed under the MIT License.
