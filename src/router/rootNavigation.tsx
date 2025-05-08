import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import TabNavigator from './tabNavigation';
import Routes from '../utils/routes';
import PhoneNumber from '../screens/profile/phoneNumber';
import {AppState, Pressable, Text} from 'react-native';
import Colors from '../utils/colors';
import CountryCode from '../screens/auth/countryCode';
import UserRegistirationInfo from '../screens/auth/userRegistirationInfo';
import {Contacts} from '../screens';
import Messages from '../screens/chats/chatRoom';
import {APPSTATE} from '../utils/constants';
import firestore from '@react-native-firebase/firestore';
import {useAppSelector} from '../store/hooks';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  const {phoneNumber} = useAppSelector(state => state.auth);
  const phone = phoneNumber;
  useEffect(() => {
    const subscribe = AppState.addEventListener(
      'change',
      async (nextAppState: any) => {
        if (nextAppState == APPSTATE.ACTIVE) {
          firestore().collection('Users').doc(phone).update({
            isOnline: true,
            lastSeen: firestore.FieldValue.serverTimestamp(),
          });
        } else {
          firestore()
            .collection('Users')
            .doc(phone)
            .update({
              isOnline: false,
              lastSeen: firestore.FieldValue.serverTimestamp(),
            });
        }
      },
    );
  }, []);

  return (
    <Stack.Navigator
    // initialRouteName={Routes.TAB}
    >
      <Stack.Screen
        options={({navigation}) => ({
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate(Routes.TAB)}
              style={{width: 80}}>
              <Text style={{color: Colors.BLUE_1, fontSize: 18}}>Done</Text>
            </Pressable>
          ),
        })}
        name={Routes.PHONENUMBER}
        component={PhoneNumber}
      />
      <Stack.Screen name={Routes.COUNTRYCODE} component={CountryCode} />
      <Stack.Screen
        name={Routes.USERREGISTIRETIONINFO}
        component={UserRegistirationInfo}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={Routes.TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={Routes.CONTACTS} component={Contacts} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={Routes.MESSAGES}
        component={Messages}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
