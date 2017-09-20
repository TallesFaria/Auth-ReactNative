import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ value, onChangeText, label, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>;
      <TextInput
        style={inputStyle}
        autoCorrect={false}
        onChangeText={onChangeText()}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    paddingLeft: 20,
    fontSize: 18,
    flex: 1
  },
  containerStyle: {
    height: 49,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };
