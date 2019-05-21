# react-native-custom-form
A React Native component which works like a Form Builder. 

Uses **React Hooks** just to demonstrate this new fabulous feature of React.


To dynamic build a form, simple declare an array of fields as shown below.
Use same default properties from RN Components Library, sucha as **TextIput**, **Button**, **TouchableOpacity**.


```javascript
[
  [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      inputProps: {
        autoCorrect: false,
        autoCapitalize: 'none',
        keyboardType: 'email-address'
      }
    }
  ],
  [
    {
      name: 'password',
      label: 'Password',
      type: 'text',
      inputProps: {
         secureTextEntry: true
      }
    }
  ],
  [
    {
      label: 'Sign Up',
      type: 'button'
    }
  ]
]
```

# TO-DO

- Implement form validation
- Implement other field types
