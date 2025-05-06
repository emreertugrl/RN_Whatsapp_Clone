import React from 'react';
import {View, SafeAreaView, FlatList, Text} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import ChatItem from '../../components/chats/chatItem';
import {useAppSelector} from '../../store/hooks';

const Chats: React.FC = () => {
  const {messages} = useAppSelector(state => state.chat);
  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          ListEmptyComponent={<Text>No message</Text>}
          data={messages}
          renderItem={({item}) => <ChatItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chats;
