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
- Default mask types for most common field types, like datetime, only number, zip code, currency, Brazilian CPF/CNPJ
- Use custom masks with help of [react-native-masked-text](https://github.com/benhurott/react-native-masked-text)
- Supports custom validations
- Implements default validations for common field types (email)
- Define your own Form style
- Define your own Field style
- Uses <a href="https://github.com/GeekyAnts/NativeBase">Nativebase</a> components

---

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
  - [Fields](#fields)
    - [Field structure](#field-sctructure)
  - [Validation](#validation)
  - [Submit](#submit)
- [Field Types](#field-types)
  - [boolean](#boolean)
  - [button](#button)
  - [reset](#reset)
  - [customComponent](#customComponent)
  - [text](#text)
  - [email](#email)
  - [credit-card](#credit)
  - [cpf](#cpf)
  - [cnpj](#cnpj)
  - [zip-code](#zip)
  - [only-numbers](#only)
  - [money](#money)
  - [cel-phone](#cel)
  - [datetime](#datetime)
  - [picker](#picker)
- [Properties](#properties)
  - [Form properties](#form-properties)
  - [Field properties](#field-properties)
    - [Custom masks](#custom-masks)
- [Form example](/src/examples/SignUp/index.js)

---

## `Installation`

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

## `Basic Usage`

- Make sure you have react-native installed

```bash
npm i -g react-native
```

---

### Fields

[see more](/src/examples/SignUp/SignUpFields.js)

#### Field structure

Fields are array items. You can easily define more than one field per `row`. See example for more details.

| Prop               | Description                             | Default                       |
| ------------------ | --------------------------------------- | ----------------------------- |
| **`name`**         | Field name                              | _None_                        |
| **`label`**        | Field label                             | _None_                        |
| **`required`**     | Required field                          | _false_                       |
| **`type`**         | Field type                              | [_Field Types_](#field-types) |
| **`fieldProps`**   | Default react props for each field type | _None_                        |
| **`defaultValue`** | Default value for the field             | _None_                        |
| **`fieldStyle`**   | Style object for the field              | _None_                        |
| **`mask`**         | Custom mask for the field               | _None_                        |

<br/>

```javascript
formFields = [
  [
    {
      name: "field1",
      label: "Field 1",
      required: false,
      type: "text",
      fieldProps: {},
      defaultValue: null,
      fieldStyle: {},
      mask: {}
    }
  ]
];
```

<br>

Example:

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

### Validation

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

### Submit

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

## `Field Types`

### boolean

### button

### reset

### customComponent

### text

### email

### credit-card

Field will be automatically formated according to card provider:

- visa or master: `9999 9999 9999 9999` or `9999 **** **** 9999` (obfuscated)
- amex: `9999 999999 99999` or `9999 ****** 99999` (obfuscated)
- diners: `9999 999999 9999` or `9999 ****** 9999` (obfuscated)

### cpf

Field will be automatically formated for `999.999.999-99`

### cnpj

Field will be automatically formated for `99.999.999/9999-99`

### zip-code

Field will be automatically formated for `99999-999`

### only-numbers

`accept only numbers`

### money

### cel-phone

### datetime

### picker

## `Properties`

### Form properties

Any [View property](http://facebook.github.io/react-native/docs/view.html) and the following:

| Prop                | Description                                                          | Default                      |
| ------------------- | -------------------------------------------------------------------- | ---------------------------- |
| **`formFields`**    | Object with field definitions.                                       | _None_                       |
| **`handleSubmit`**  | Callback function to handle form submission                          | _Inherited_                  |
| **`validation`**    | Function to return errors object                                     | _{fieldName: error message}_ |
| **`submitOnDirty`** | Disable form buttons in case form is dirty (empty or with errors)    | _false_                      |
| **`formStyle`**     | Style object with custom styles. Overrides default style of the Form | _{flex:1 , padding: 10}_     |

### Field properties

Most [style properties](http://facebook.github.io/react-native/docs/style.html) will work as expected.

| Prop        | Description                                                             | Default     |
| ----------- | ----------------------------------------------------------------------- | ----------- |
| **`size`**  | Size of the icon, can also be passed as `fontSize` in the style object. | `12`        |
| **`name`**  | What icon to show, see Icon Explorer app or one of the links above.     | _None_      |
| **`color`** | Color of the icon.                                                      | _Inherited_ |

<br>

#### Custom masks

If you want, we use the [`MaskService`](https://github.com/benhurott/react-native-masked-text/blob/master/README.md#extra-maskservice) from [`react-native-masked-text`](https://github.com/benhurott/react-native-masked-text/blob/master/README.md)

<br/>

## `Form example`

[see more](/src/examples/SignUp/index.js)

```jsx
import Form4u from "react-native-form4u";
import fields from "./formFields.js";
import validationRules from "./formValidationRules.js";

const App = () => {
  return (
    <Form4u
      formFieldsRows={fields}
      handleSubmit={handleSubmit}
      validation={validationRules}
      submitOnDirty
    />
  );
};

export default App;
```

<br/>

---

## `BACKLOG`

- Implement other field types
- Tests
- Documentation!!!

---

## `Version History`

<details><summary>0.0.1</summary>

- remove styled-component from Input from native-base, onChange and onChangeText were not been called
  [see more](https://github.com/GeekyAnts/NativeBase/issues/2692)
- fix errors view which was shrinking in few cases
- implement form validation with error messages
- Implement custom form picker
- Allows form to render any kind of React component
- Added react-native-maked-text to allows masked input texts

</details>

<br>

---

## `Contributing`

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## `License`

[MIT](https://choosealicense.com/licenses/mit/)
