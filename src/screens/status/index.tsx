import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import firestore from '@react-native-firebase/firestore';
import {mockContacts} from '../../utils/mockData';

const Status: React.FC = () => {
  const uploadMockContactsToFirestore = async () => {
    try {
      for (const contact of mockContacts) {
        const phone = contact.phoneNumbers?.[0]?.number || '';
        const email = contact.emailAddresses?.[0]?.email || '';

        // Firestore'a eklenecek user verisi
        const user = {
          name: `${contact.givenName} ${contact.familyName}`,
          phoneNumber: phone,
          email,
          avatar: contact.thumbnailPath,
          createdAt: firestore.FieldValue.serverTimestamp(),
        };

        // Telefon numarasını belge ID olarak kullan (varsa)
        if (phone) {
          await firestore().collection('Users').doc(phone).set(user);
        }
      }
      console.log("Mock kullanıcılar Firestore'a yüklendi.");
    } catch (error) {
      console.error('Firestore yükleme hatası:', error);
    }
  };
  useEffect(() => {
    const uploadIfEmpty = async () => {
      const snapshot = await firestore().collection('Users').get();
      if (snapshot.empty) {
        await uploadMockContactsToFirestore();
      } else {
        console.log('Firestore zaten kullanıcı verisi içeriyor.');
      }
    };

    uploadIfEmpty();
  }, []);

  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <Text>Status</Text>
      </View>
    </SafeAreaView>
  );
};

export default Status;
