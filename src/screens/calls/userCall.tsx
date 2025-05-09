import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Text,
  Image,
} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import Colors from '../../utils/colors';
import {
  Call,
  CallSlash,
  MicrophoneSlash,
  Video,
  VolumeHigh,
} from 'iconsax-react-nativejs';
import {useNavigation} from '@react-navigation/native';

const UserCall: React.FC = ({route}) => {
  const {user} = route.params;
  const [calling, setCalling] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    let interval = null;
    if (!calling) {
      interval = setInterval(() => {
        setSeconds(prevSecond => {
          if (prevSecond === 59) {
            setMinutes(prevMinutes => prevMinutes + 1);
            return 0;
          }
          return prevSecond + 1;
        });
      }, 1000);
    } else if (calling && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [calling, seconds]);

  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <StatusBar backgroundColor={Colors.BLACK} barStyle={'light-content'} />
      <View
        style={[defaultScreenStyle.container, {backgroundColor: Colors.BLACK}]}>
        <View style={styles.userContainer}>
          <Text style={styles.name}>{user?.name}</Text>
          {calling ? (
            <Text style={styles.status}>Calling...</Text>
          ) : (
            <Text style={styles.status}>
              {String(minutes).padStart(2, 0)}:{String(seconds).padStart(2, 0)}
            </Text>
          )}
          <View style={styles.avatarContainer}>
            <Image
              source={{uri: user?.profileImage || user?.avatar}}
              style={styles.avatar}
            />
          </View>
        </View>
        {calling ? (
          <View style={styles.callContainer}>
            <Pressable
              onPress={() => setCalling(false)}
              style={[styles.buttons, {backgroundColor: Colors.GREEN_3}]}>
              <Call size={35} color={Colors.WHITE} />
            </Pressable>
            <Pressable
              onPress={() => navigation.goBack()}
              style={[styles.buttons, {backgroundColor: Colors.RED_1}]}>
              <CallSlash size={35} color={Colors.WHITE} variant="Bold" />
            </Pressable>
          </View>
        ) : (
          <View style={styles.callContainer}>
            <Pressable style={styles.buttons}>
              <VolumeHigh size={35} color={Colors.WHITE} />
            </Pressable>
            <Pressable style={styles.buttons}>
              <Video size={35} color={Colors.WHITE} variant="Bold" />
            </Pressable>
            <Pressable style={styles.buttons}>
              <MicrophoneSlash size={35} color={Colors.WHITE} variant="Bold" />
            </Pressable>
            <Pressable
              onPress={() => navigation.goBack()}
              style={[styles.buttons, {backgroundColor: Colors.RED_1}]}>
              <CallSlash size={35} color={Colors.WHITE} variant="Bold" />
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
  },
  //User View Styles
  name: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: 30,
  },
  status: {
    color: Colors.GRAY_2,
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  seaasdas: {},
  //Call View Styles
  callContainer: {
    backgroundColor: Colors.BLACK_2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    borderRadius: 30,
  },
  buttons: {
    width: 75,
    height: 75,
    backgroundColor: Colors.GRAY_1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default UserCall;
