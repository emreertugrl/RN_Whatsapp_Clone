import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';

const Calls: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <Text>Calls</Text>
      </View>
    </SafeAreaView>
  );
};

export default Calls;
