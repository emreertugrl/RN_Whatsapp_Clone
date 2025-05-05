import React from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {chats} from '../../utils/mockData';
import ChatItem from '../../components/chats/chatItem';

const Chats: React.FC = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          data={chats}
          renderItem={({item}) => <ChatItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chats;
