import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {useAppSelector} from '../../store/hooks';
import Colors from '../../utils/colors';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../utils/routes';

const ProfileCard = () => {
  const {phoneNumber} = useAppSelector(state => state.auth);
  const [user, setUser] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc(phoneNumber)
      .onSnapshot(documentSnapshot => {
        setUser(documentSnapshot?.data());
      });

    return () => subscriber();
  }, []);
  console.log(user);
  return (
    <Pressable
      onPress={() => navigation.navigate(Routes.EDITPROFILE)}
      style={styles.container}>
      <View style={styles.imageContaine}>
        {user ? (
          <View style={styles.left}>
            <Image
              source={{
                uri: user?.profileImage
                  ? user?.profileImage
                  : 'data:image/png;base64,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',
              }}
              style={styles.image}
            />
          </View>
        ) : (
          <Text style={styles.imageText}>
            {user?.name[0].toUpperCase() + ' ' + user?.surname[0].toUpperCase()}
          </Text>
        )}
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.text}>{user?.name + ' ' + user?.surname}</Text>
        <Text style={styles.status}>{user?.status}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 1,
    padding: 20,
    borderRadius: 10,
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
  left: {
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
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
  image: {
    width: 65,
    height: 65,
    borderRadius: 70,
    resizeMode: 'contain',
  },
});

export default ProfileCard;
