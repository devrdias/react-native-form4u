import { Item, Picker } from "native-base";
import PropTypes from "prop-types";
import React from "react";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const screenWidth = Dimensions.get("window").width;

const FormPicker = ({ placeholder, pickerItems = [], ...pickerProps }) => (
  <Item picker>
    <Picker
      note
      mode="dropdown"
      placeholder={placeholder}
      placeholderIconColor="#007aff"
      iosIcon={<Icon size={20} color="#bfc6ea" name="ios-arrow-dropdown" />}
      style={{ width: undefined }} // fix for widht with native-base 2.12.1
      // style={{ width: "90%" }}
      placeholderStyle={{ color: "#bfc6ea", maxWidth: "100%" }}
      textStyle={{ maxWidth: "100%" }}
      {...pickerProps}
    >
      {pickerItems.map((item, i) => (
        <Picker.Item key={i} label={item.label} value={item.value.toString()} />
      ))}
    </Picker>
  </Item>
);

// renderHeader             - Makes component that appears as header of the Picker, comes with a backAction prop to close the picker.
// headerStyle               - Custom style for header
// iosHeader                 - Custom text for the header title
// headerBackButtonText     - Custom text for the header back button
// headerBackButtonTextStyle - Custom text style for the header back button
// headerTitleStyle           - Custom title style for the header title
// iosIcon                    - Icon with picker dropdown
// placeholder                - Placeholder for Picker component (iOS)
// placeholderStyle         - Custom style for placeholder text (iOS)
// placeholderIconColor       - Set placeholder icon color (iOS)
// itemStyle                 - Style of items in Picker
// itemTextStyle             - Text style of item component in Picker
// textStyle                 - Text style of header
// supportedOrientations      - Portrait, Landscape, Landscape-left, Landscape-right Allows the modal to rotate
// enabled                   - boolean Enable / disable Picker button
FormPicker.propTypes = {
  pickerItems: PropTypes.array.isRequired
};

FormPicker.defaultProps = {
  iosHeader: " ",
  pickerItems: [],
  headerBackButtonText: "Voltar"
};

export default FormPicker;
