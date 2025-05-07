import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, Text} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import ChatItem from '../../components/chats/chatItem';
import {useAppSelector} from '../../store/hooks';
import firestore, {Filter} from '@react-native-firebase/firestore';

const Chats: React.FC = () => {
  // const {messages} = useAppSelector(state => state.chat);
  const {phoneNumber} = useAppSelector(state => state.auth);

  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // const subscribe = firestore()
    //   .collection('Messages')
    //   .where('from', '==', phoneNumber)
    //   .orderBy('timeStamp', 'asc')
    //   .onSnapshot(snapShot => {
    //     const messages = snapShot?.docs.map(doc => doc.data());
    //     setChats(messages);
    //     console.log(chats);
    //     console.log('Burada');
    //   });
    // return () => subscribe();
    firestore()
      .collection('Messages')
      // .where(Filter('from', '==', `${phoneNumber}`))
      .get()
      .then(querySnapshot => {
        const messages = [];
        querySnapshot.forEach(documentSnapshot => {
          messages.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setChats(messages);
      });
  }, []);
  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          ListEmptyComponent={<Text>No message</Text>}
          data={chats}
          renderItem={({item}) => <ChatItem item={item} />}
          keyExtractor={item => item?.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chats;
