import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

type Props = {
  item: {
    message: string;
  };
};

const MessageBox: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, color: 'black'}}>{item.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GREEN_1,
    marginLeft: 5,
    marginVertical: 20,
    padding: 15,
    borderRadius: 10,
  },
});

export default MessageBox;
