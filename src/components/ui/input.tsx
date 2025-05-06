import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Colors from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../store/hooks';

const CustomInput: React.FC<any> = ({onChange, value, placeholder}) => {
  const navigation = useNavigation();
  const {selectedCountry} = useAppSelector(state => state.auth);
  return (
    <View style={styles.container}>
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
  },
  codeContainer: {
    paddingHorizontal: 20,
    borderColor: Colors.GRAY_1,
    borderRightWidth: 1,
  },
  input: {
    padding: 10,
    fontSize: 18,
    backgroundColor: Colors.WHITE,
  },
  selectedCountry: {
    padding: 10,
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderColor: Colors.GRAY_2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  country: {
    fontSize: 18,
    color: Colors.BLUE_1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countryCode: {
    fontSize: 30,
    color: Colors.GRAY_1,
  },
});

export default CustomInput;
