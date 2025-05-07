import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
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
import Chats from './index';
import {useAppSelector} from '../../store/hooks';

const Messages: React.FC = ({route}) => {
  const {contact, userId} = route.params;
  const {phoneNumber} = useAppSelector(state => state.auth);
  console.log(userId);
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const sendMessage = () => {
    firestore().collection('Messages').doc(phoneNumber).set({
      from: phoneNumber,
      to: contact?.phoneNumbers[0].number,
      message: message,
      timeStamp: firestore.FieldValue.serverTimestamp(),
      read: false,
    });
  };
  //   useEffect(() => {
  //     const unsubscribe = firestore()
  //       .collection('Messages')
  //       .where('from', '==', phoneNumber)
  //       .orderBy('timeStamp', 'asc')
  //       .onSnapshot(snapShot => {
  //         const messages = snapShot?.docs.map(doc => doc.data());
  //         setChats(messages);
  //       });
  //     return unsubscribe;
  //   }, []);

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

export default Messages;
