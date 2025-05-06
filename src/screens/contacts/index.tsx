import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  PermissionsAndroid,
  FlatList,
} from 'react-native';
import Contacts from 'react-native-contacts';
import {mockContacts} from '../../utils/mockData';
import ContactsItem from '../../components/contacts/contactItem';

const Contactss: React.FC = () => {
  const getContactsSafely = async () => {
    if (Platform.OS === 'android') {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Kişilere Erişim İzni',
          message: 'Kişilere erişmek için izin vermeniz gerekiyor.',
          buttonPositive: 'Tamam',
        },
      );
      console.log('İzin durumu:', permission);

      if (permission === PermissionsAndroid.RESULTS.GRANTED) {
        try {
          // 1. Sahte kişi oluştur
          const newContact = {
            givenName: 'Emre',
            familyName: 'Deneme',
            phoneNumbers: [
              {
                label: 'mobile',
                number: '5551234567',
              },
            ],
          };

          // 3. Tüm kişileri getir
          const contacts = await Contacts.getAll();
          console.log('Toplam kişi sayısı:', contacts.length);
          contacts.slice(0, 5).forEach((c, i) => {
            console.log(`Kişi ${i + 1}: ${c.displayName}`);
          });
        } catch (err) {
          console.error('Kişi eklenirken hata oluştu:', err);
        }
      } else {
        console.warn('İzin reddedildi.');
      }
    } else {
      const contacts = await Contacts.getAll();
      console.log('Kişiler:', contacts);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mockContacts}
        renderItem={({item}) => <ContactsItem item={item} />}
        keyExtractor={item => item.recordID}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Contactss;
