import React from 'react';
import {Text, StyleSheet, Pressable, Image, View} from 'react-native';
import {ChatItemProps} from '../../modals/ui/chatItemProps';
import {ArrowRight2} from 'iconsax-react-nativejs';
import Colors from '../../utils/colors';

const ChatItem: React.FC<ChatItemProps> = ({item}) => {
  console.log([item]);

  return (
    <Pressable style={styles.container}>
      <View style={styles.left}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.right}>
        <View style={styles.middle}>
          <View style={styles.rigthTop}>
            <Text style={styles.rightName}>
              {item.name} {item.surname}
            </Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
          <View style={styles.rightDown}>
            <Text style={styles.tick}>√√</Text>
            <Text style={styles.lastMessage} numberOfLines={1}>
              {item.lastMessage}
            </Text>
          </View>
        </View>
        <View style={styles.end}>
          <ArrowRight2 size={25} color={Colors.GRAY_2} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 70,
  },
  left: {},
  right: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: Colors.GRAY_2,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  rigthTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightName: {
    fontWeight: 'bold',
    flex: 1,
    fontSize: 18,
  },
  date: {
    fontSize: 16,
    color: Colors.GRAY_2,
  },
  middle: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 15,
  },
  rightDown: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  tick: {
    color: Colors.BLUE_1,
  },
  lastMessage: {
    color: Colors.GRAY_1,
  },
  end: {
    paddingLeft: 5,
  },
});

export default ChatItem;
