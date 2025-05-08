import React from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import Colors from '../../utils/colors';
import {ArrowRight2} from 'iconsax-react-nativejs';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../utils/routes';
import {useAppSelector} from '../../store/hooks';
const PhoneInput: React.FC<any> = ({onChange, value}) => {
  const navigation = useNavigation();
  const {selectedCountry} = useAppSelector(state => state.auth);
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.selectedCountry}
        onPress={() => navigation.navigate(Routes.COUNTRYCODE)}>
        <Text style={styles.country}>{selectedCountry?.country}</Text>
        <ArrowRight2 size="28" color={Colors.GRAY_2} />
      </Pressable>
      <View style={styles.inputContainer}>
        <View style={styles.codeContainer}>
          <Text style={styles.countryCode}>{selectedCountry?.code}</Text>
        </View>
        <TextInput
          value={value}
          keyboardType="number-pad"
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={value => onChange(value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: Colors.GRAY_2,
    padding: 4,
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
