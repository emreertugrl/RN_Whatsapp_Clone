import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Colors from '../../utils/colors';
import {InputProps} from '../../modals/ui/input';

const CustomInput: React.FC<InputProps> = ({onChange, value, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.placeHolder}>{placeholder}</Text>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={value => onChange(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: Colors.GRAY_2,
    padding: 10,
  },
  placeHolder: {
    fontSize: 16,
    color: Colors.BLACK,
  },
  input: {
    padding: 10,
    fontSize: 24,
    backgroundColor: Colors.WHITE,
  },
});

export default CustomInput;
