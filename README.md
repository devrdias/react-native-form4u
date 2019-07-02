# REACT NATIVE CUSTOM FORM

A React Native component which works like a Form Builder.

I first started this project to help myself on personal projects and for learning purposes, but them it turned out that maybe it can help others to build apps using this simple, light and fast Form Builder.

Uses **React Hooks** just to demonstrate this new fabulous feature of React.

To dynamic build a form, simple declare an array of fields as shown below.
Use same default properties from RN Components Library, sucha as **TextIput**, **Button**, **TouchableOpacity**.

---

### USAGE EXAMPLE

<p align="center">
  <img width="300"  src="images/formBlank.png">
  <img width="300"   src="images/formFilled.png">
</p>

---

```json
[
  [
    {
      "name": "firstName",
      "label": "First Name",
      "type": "input",
      "inputProps": {
        "autoCorrect": false
      }
    },
    {
      "name": "lastName",
      "label": "Last Name",
      "type": "input",
      "inputProps": {
        "autoCorrect": false
      }
    }
  ],
  [
    {
      "name": "email",
      "label": "Email",
      "type": "input",
      "inputProps": {
        "autoCorrect": false,
        "autoCapitalize": "none",
        "keyboardType": "email-address"
      }
    }
  ],
  [
    {
      "name": "subject",
      "placeholder": "Pick a topic of your interest",
      "pickerItems": [
        {
          "label": "React Native",
          "value": 0
        },
        {
          "label": "React Hooks",
          "value": 1
        },
        {
          "label": "React Navigation",
          "value": 2
        },
        {
          "label": "React News",
          "value": 3
        }
      ],
      "type": "picker"
    }
  ],
  [
    {
      "name": "password",
      "label": "Password",
      "type": "input",
      "inputProps": {
        "secureTextEntry": true
      }
    }
  ],
  [
    {
      "name": "subscribe",
      "label": "Subscribe me to weekly news from Tech world.",
      "type": "boolean",
      "defaultValue": true
    }
  ],
  [
    {
      "name": "signUpButton",
      "label": "Sign Up",
      "type": "button"
    }
  ],
  [
    {
      "name": "resetButton",
      "label": "Reset",
      "type": "button"
    }
  ]
]
```

---

# BACKLOG

- [ ] implement form validation with error messages
- [ ] refactor to use styled components
- [ ] Implement form validation
- [ ] Implement other field types
- [ ] Tests
- [ ] Refactor components to use styled components syntax

---

## VERSION HISTORY

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
