import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../utils/colors';
import {useAppSelector} from '../../store/hooks';
import moment from 'moment';

type Props = {
  item: {
    message: string;
  };
};

const MessageBox: React.FC<Props> = ({item}) => {
  const {phoneNumber} = useAppSelector(state => state.auth);
  return (
    <View
      style={[
        styles.container,
        item.from === phoneNumber
          ? styles.sendMessageContainer
          : styles.getMessageContainer,
      ]}>
      <Text style={{fontSize: 18, color: 'black'}}>{item.message}</Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center',
          marginTop: 5,
        }}>
        <Text style={{fontSize: 12, color: 'black', textAlign: 'right'}}>
          {moment.unix(item.timeStamp._seconds).utcOffset(3).format('HH:mm')}
        </Text>
        {item.from === phoneNumber && (
          <Text style={item.read ? styles.tick : {color: Colors.GRAY_2}}>
            √√
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginVertical: 20,
    padding: 15,
    borderRadius: 10,
  },
  sendMessageContainer: {
    backgroundColor: Colors.GREEN_1,
    alignSelf: 'flex-end',
    maxWidth: 350,
    minWidth: 100,
  },
  getMessageContainer: {
    backgroundColor: Colors.WHITE,
    maxWidth: 350,
    minWidth: 100,
    alignSelf: 'flex-start',
  },
  tick: {
    color: Colors.BLUE_1,
  },
});

export default MessageBox;
