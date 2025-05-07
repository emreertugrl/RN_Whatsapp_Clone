import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {ContactProps} from '../../modals/data/contacts/contactTypes';
import Colors from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../utils/routes';

const ContactsItem: React.FC<ContactProps> = ({item}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(Routes.MESSAGES, {contact: item})}
      style={styles.container}>
      <View>
        <Text style={styles.text}>
          {item.familyName} {item.givenName}
        </Text>
        <Text style={styles.phone}>{item.phoneNumbers[0].number}</Text>
      </View>
      <View style={styles.imageContaine}>
        <Text style={styles.imageText}>
          {item.familyName[0]}
          {item.givenName[0]}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 1,
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.BLACK,
  },
  phone: {
    fontSize: 18,
    color: Colors.BLACK,
  },
  imageContaine: {
    backgroundColor: Colors.GRAY_3,
    borderWidth: 1,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    fontSize: 30,
  },
});

export default ContactsItem;
