import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import PhoneInput from '../../components/ui/phoneInput';

const PhoneNumber: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <Text style={{fontSize: 18, textAlign: 'center', padding: 20}}>
          Please confirm your country code and enter your phone number
        </Text>
        <PhoneInput />
      </View>
    </SafeAreaView>
  );
};

export default PhoneNumber;
