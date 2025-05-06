import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {ContactProps} from '../../modals/data/contacts/contactTypes';
import {SafeAreaView} from 'react-native';
import Colors from '../../utils/colors';
import {ArrowLeft, Call, Video} from 'iconsax-react-nativejs';
import {useNavigation} from '@react-navigation/native';

const ContactHeader: React.FC<ContactProps> = ({contact}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft size={28} />
      </TouchableOpacity>
      <View style={styles.imageContaine}>
        <Text style={styles.imageText}>
          {contact?.familyName[0]}
          {contact?.givenName[0]}
        </Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: Colors.BLACK}}>
          {contact?.familyName}

          {' ' + contact?.givenName}
        </Text>
        <Text style={{fontSize: 18, color: Colors.GRAY_2}}>
          {contact?.phoneNumbers[0].number}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Video color={Colors.BLUE_1} size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Call color={Colors.BLUE_1} size={30} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    padding: 10,
  },
  nameContainer: {
    flex: 1,
  },
  imageContaine: {
    backgroundColor: Colors.GRAY_3,
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    fontSize: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});

export default ContactHeader;
