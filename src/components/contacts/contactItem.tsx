import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {ContactProps} from '../../modals/data/contacts/contactTypes';
import Colors from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../utils/routes';
import firestore from '@react-native-firebase/firestore';
import {formatPhoneNumber} from '../../utils/functions';

const ContactsItem: React.FC<ContactProps> = ({item}) => {
  const navigation = useNavigation();
  const [userExists, setUserExists] = React.useState<boolean | null>(null);

  const checkUsersExists = async () => {
    const userRef = firestore().collection('Users');
    const querySnapshot = await userRef
      .where('phoneNumber', '==', item?.phoneNumbers[0].number)
      .get();
    return !querySnapshot.empty;
  };
  useEffect(() => {
    const fetchData = async () => {
      const exists = await checkUsersExists();
      setUserExists(exists);
    };
    fetchData();
  }, []);

  return (
    <Pressable
      onPress={() => navigation.navigate(Routes.MESSAGES, {contact: item})}
      style={styles.container}>
      <View style={styles.imageContaine}>
        <Text style={styles.imageText}>
          {item.familyName[0]}
          {item.givenName[0]}
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.text}>
          {item?.familyName} {item?.givenName}
        </Text>
        <Text style={styles.phone}>
          {formatPhoneNumber(item?.phoneNumbers[0].number)}
        </Text>
      </View>
      {userExists === false && (
        <View style={styles.inviteContainer}>
          <Text style={styles.invite}>Davet Et</Text>
        </View>
      )}
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
  inviteContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  invite: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.GREEN_2,
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
    marginRight: 10,
  },
  imageText: {
    fontSize: 30,
  },
});

export default ContactsItem;
