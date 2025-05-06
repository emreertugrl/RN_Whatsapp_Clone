import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, Button, Alert} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import PhoneInput from '../../components/ui/phoneInput';
import {
  getAuth,
  onAuthStateChanged,
  signInWithPhoneNumber,
} from '@react-native-firebase/auth';
import Routes from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getCountriesCode} from '../../store/actions/authActions';
import {setPhoneNumber} from '../../store/slice/authSlice';

const PhoneNumber: React.FC = () => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();
  const {phoneNumber, selectedCountry} = useAppSelector(state => state.auth);
  useEffect(() => {
    dispatch(getCountriesCode());
  }, []);
  const phone = `${selectedCountry.code}${phoneNumber}`;

  // Handle the button press
  async function handleSignInWithPhoneNumber() {
    const confirmation = await signInWithPhoneNumber(getAuth(), phone);
    if (confirmation.verificationId) {
      dispatch(setPhoneNumber(phone));
      navigation.navigate(Routes.USERREGISTIRETIONINFO);
    } else {
      console.log('Selam');
      Alert.alert('Hatalı telefon numarası');
    }
    // navigation.navigate(Routes.TAB);
  }
  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <Text style={{fontSize: 18, textAlign: 'center', padding: 20}}>
          Please confirm your country code and enter your phone number
        </Text>
        <PhoneInput
          value={phoneNumber}
          onChange={value => dispatch(setPhoneNumber(value))}
        />
        <Button title="Kaydet" onPress={() => handleSignInWithPhoneNumber()} />
      </View>
    </SafeAreaView>
  );
};

export default PhoneNumber;
