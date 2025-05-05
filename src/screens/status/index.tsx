import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';

const Status: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <Text>Status</Text>
      </View>
    </SafeAreaView>
  );
};

export default Status;
