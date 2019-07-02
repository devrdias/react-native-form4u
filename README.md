# react-native-custom-form

A React Native component which works like a Form Builder.

I first started this project to help myself on personal projects and for learning purposes, but them it turned out that maybe it can help others to build apps using this simple, light and fast Form Builder.

Uses **React Hooks** just to demonstrate this new fabulous feature of React.

To dynamic build a form, simple declare an array of fields as shown below.
Use same default properties from RN Components Library, sucha as **TextIput**, **Button**, **TouchableOpacity**.

```javascript
[
  [
    {
      name: "email",
      label: "Email",
      type: "text",
      inputProps: {
        autoCorrect: false,
        autoCapitalize: "none",
        keyboardType: "email-address"
      }
    }
  ],
  [
    {
      name: "password",
      label: "Password",
      type: "text",
      inputProps: {
        secureTextEntry: true
      }
    }
  ],
  [
    {
      label: "Sign Up",
      type: "button"
    }
  ]
];
```

json file bellow will produce the following screen:

![Blank Form](/images/formBlank.png)
![Filled Form](/images/formFilled.png)

# Dependencies

```
native-base: ^2.12.1
react-native-masked-text: ^1.12.3
react-native-vector-icons: ^6.6.0
styled-components: ^4.3.2
```

# DOING

- refactor to use styled components
- implement form validation with error messages

# TO-DO

- Implement form validation
- Implement other field types
- Tests
- Refactor components to use styled components syntax

# Version History

## 0.0.2

- Implement custom form picker
- Allows form to render any kind of React component
- Added react-native-maked-text to allows masked input texts

#
