import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Contacts: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Contacts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Contacts;
