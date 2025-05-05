import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import Colors from '../../utils/colors';
import {ArrowRight2} from 'iconsax-react-nativejs';
const PhoneInput: React.FC = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.selectedCountry}>
        <Text style={styles.country}>United States</Text>
        <ArrowRight2 size="28" color={Colors.GRAY_2} />
      </Pressable>
      <View style={styles.inputContainer}>
        <View style={styles.codeContainer}>
          <Text style={styles.countryCode}>+1</Text>
        </View>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="Phone Number"
        />
      </View>
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

export default PhoneInput;
