<p align="center">
  <img width="600"  src="images/form4ulogo.png">
</p>

<p align="center">
A React Native form builder, simple, light and fast !

- Define your json file with your [fields](/src/screens/SignUp/SignUpFields.js), can be any react-native field or valid component;

- Define [validation](/src/screens/SignUp/SignUpFormValidationRules.js) with the flexibility of using a JavaScript function;
  </p>

### Package comes with a full Sign Up login screen example.

---

## Example

<p align="center">
  <img width="250"  src="images/formBlank.png">
  <img width="250"  src="images/formFilled.png">
  <img width="250"  src="images/formErrors.png">
</p>

---

### 1. [Defining Fields](/src/screens/SignUp/SignUpFields.js)

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

### 2. [Defining form validation](/src/screens/SignUp/SignUpFormValidationRules.js) rules by field

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

### 3. [Declaring callback](/src/screens/SignUp/index.js) to be executed after form submission/validation

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

### 4. [Using the component](/src/screens/SignUp/index.js)

```JSX
<CustomForm
  formFieldsRows={fields}
  handleSubmit={handleSubmit}
  validation={validationRules}
/>
```

---

## BACKLOG

- [ x ] refactor to use styled components
- [ ] Implement other field types
- [ ] Tests
- [ ] Documentation!!!

---

## VERSION HISTORY

### 0.0.4

- [ x ] remove styled-component from Input from native-base, onChange and onChangeText were not been called
  [see more](https://github.com/GeekyAnts/NativeBase/issues/2692)
- [ x ] fix errors view which was shrinking in few cases

### 0.0.3

- [ x ] implement form validation with error messages

### 0.0.2

- [ x ] Implement custom form picker
- [ x ] Allows form to render any kind of React component
- [ x ] Added react-native-maked-text to allows masked input texts

---

## CONTRIBUTING

Any kind o help is appreciated, so please let's grow the community together.

If you would like to contribute whith this project somehow, please read
[CONTRIBUTING](CONTRIBUTING.md)

## License

This project is licensed under the MIT License.
