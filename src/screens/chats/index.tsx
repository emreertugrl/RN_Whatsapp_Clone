import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, Text} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import ChatItem from '../../components/chats/chatItem';
import {useAppSelector} from '../../store/hooks';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Chats: React.FC = () => {
  const {phoneNumber} = useAppSelector(state => state.auth);
  const [chats, setChats] = useState([]);
  const user = auth().currentUser?.uid;

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('Messages')
      .orderBy('timeStamp', 'desc') // son mesaj üstte
      .onSnapshot(querySnapshot => {
        const allMessages = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          // Sadece bu kullanıcıyla alakalı mesajları al
          if (data.from === phoneNumber || data.to === phoneNumber) {
            allMessages.push({id: doc.id, ...data});
          }
        });

        // Her kişiyle olan en son mesajı almak için grupla
        const grouped = {};
        allMessages.forEach(msg => {
          const otherUser = msg.from === phoneNumber ? msg.to : msg.from;

          // Eğer bu kullanıcı için daha önce eklenmemişse, ekle (zaten sıralı)
          if (!grouped[otherUser]) {
            grouped[otherUser] = msg;
          }
        });

        const uniqueChats = Object.values(grouped);
        setChats(uniqueChats);
      });

    return () => unsubscribe();
  }, [phoneNumber]);

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
