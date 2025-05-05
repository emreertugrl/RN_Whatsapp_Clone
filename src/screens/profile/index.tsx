import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';

const Profile: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
