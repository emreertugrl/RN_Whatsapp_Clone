import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  TextInput,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';
import ContactHeader from '../../components/router/contactHeader';
import Colors from '../../utils/colors';
import {
  Add,
  Camera,
  FolderAdd,
  Microphone2,
  Send,
} from 'iconsax-react-nativejs';
import firestore from '@react-native-firebase/firestore';
import MessageBox from '../../components/chats/messageBox';
import {useAppSelector} from '../../store/hooks';

const ChatRoom: React.FC = ({route}) => {
  const {contact} = route?.params;
  const {phoneNumber} = useAppSelector(state => state.auth);
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  let contactNumber = contact?.phoneNumbers?.[0]?.number || contact.phoneNumber;
  const sendMessage = () => {
    if (!phoneNumber || !contactNumber || !message.trim()) {
      console.warn('Eksik bilgi var. Mesaj gönderilemiyor.');
      return;
    }

    const subscriber = firestore()
      .collection('Messages')
      .add({
        from: phoneNumber,
        to: contactNumber,
        message: message,
        timeStamp: firestore.Timestamp.now(),
        read: false,
      })
      .then(res => setMessage(''))
      .catch(err => console.error('Mesaj gönderme hatası:', err));
  };
  const [hasMarkedAsRead, setHasMarkedAsRead] = useState(false);

  const markMessagesAsRead = async () => {
    if (hasMarkedAsRead) return; // Zaten okundu olarak işaretlendi ise durdur

    try {
      const snapshot = await firestore()
        .collection('Messages')
        .where('from', '==', contactNumber)
        .where('to', '==', phoneNumber)
        .where('read', '==', false)
        .get();

      const batch = firestore().batch();

      snapshot.forEach(doc => {
        batch.update(doc.ref, {read: true});
      });

      await batch.commit();
      setHasMarkedAsRead(true); // Okundu olarak işaretlendiğini kaydet
    } catch (error) {
      console.error('Okunmamış mesajlar güncellenemedi:', error);
    }
  };
  useEffect(() => {
    const subscribe = firestore()
      .collection('Messages')
      .orderBy('timeStamp', 'desc')
      .onSnapshot(snapshot => {
        if (!snapshot) return; // null koruması
        const allMessages = snapshot.docs.map(doc => doc.data());

        // Filtrele: Sadece bu kişiyle olan konuşmalar
        const filtered = allMessages.filter(
          msg =>
            (msg.from === phoneNumber && msg.to === contactNumber) ||
            (msg.from === contactNumber && msg.to === phoneNumber),
        );

        setChats(filtered);
      });

    return () => subscribe();
  }, [phoneNumber, contactNumber]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : -25} // iOS için üstten boşluk
    >
      <ContactHeader contact={contact} />
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../../assets/images/back.png')}
          style={{flex: 1, padding: 10}}>
          <FlatList
            style={{flex: 1}}
            inverted
            ListEmptyComponent={() => (
              <View
                style={{
                  backgroundColor: Colors.YELLOW_1,
                  padding: 30,
                  margin: 30,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  marginTop: 400,
                  transform: [{rotate: '180deg'}],
                }}>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                  Messages you send to this chat and calls are not secured with
                  end-to-end encription
                </Text>
              </View>
            )}
            onEndReached={() => markMessagesAsRead()}
            onEndReachedThreshold={0.1}
            data={chats}
            renderItem={({item}) => <MessageBox item={item} />}
          />
        </ImageBackground>

        <View style={styles.bottomContainer}>
          <TouchableOpacity>
            <Add color={Colors.BLUE_1} size={35} />
          </TouchableOpacity>
          <Pressable style={styles.InputContainer}>
            <TextInput
              value={message}
              onChangeText={setMessage}
              style={styles.bottomInput}
            />
            <TouchableOpacity>
              {message.length > 0 ? (
                <Send color={Colors.BLUE_1} size={30} onPress={sendMessage} />
              ) : (
                <FolderAdd color={Colors.BLUE_1} size={30} />
              )}
            </TouchableOpacity>
          </Pressable>
          <View style={styles.bottomIconsContainer}>
            <TouchableOpacity>
              <Camera color={Colors.BLUE_1} size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Microphone2 color={Colors.BLUE_1} size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: Colors.GRAY_3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    padding: 15,
    borderTopWidth: 1,
    borderColor: Colors.GRAY_2,
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  InputContainer: {
    height: 50,
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.GRAY_2,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  bottomInput: {
    fontSize: 18,
    flex: 1,
  },
});

export default ChatRoom;
