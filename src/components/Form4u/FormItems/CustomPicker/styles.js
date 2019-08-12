import { Item, Picker } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 4px;
`;

export const StyledItemPicker = styled(Item).attrs({ picker: true })``;

export const StyledPicker = styled(Picker).attrs((props) => ({
  note: true,
  mode: 'dropdown',
  placeholderIconColor: props.placeholderIconColor ? props.placeholderIconColor : '#007aff',
  iosIcon: <Icon size={20} color="#bfc6ea" name="ios-arrow-dropdown" />,
  placeholderStyle: {
    color: '#bfc6e9',
    maxWidth: '100%',
  },
  textStyle: { maxWidth: '100%' },
}))`
  width: undefined;
`;

export const Error = styled.View`
  flex: 1;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 12px;
`;
