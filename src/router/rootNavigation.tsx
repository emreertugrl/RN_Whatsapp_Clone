import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import TabNavigator from './tabNavigation';
import Routes from '../utils/routes';
import PhoneNumber from '../screens/profile/phoneNumber';
import {AppState} from 'react-native';
import CountryCode from '../screens/auth/countryCode';
import UserRegistirationInfo from '../screens/auth/userRegistirationInfo';
import {Contacts} from '../screens';
import Messages from '../screens/chats/chatRoom';
import {APPSTATE} from '../utils/constants';
import firestore from '@react-native-firebase/firestore';
import {useAppSelector} from '../store/hooks';
import EditProfile from '../screens/profile/editProfile';

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
          firestore().collection('Users').doc(phone).update({
            isOnline: false,
            lastSeen: firestore.FieldValue.serverTimestamp(),
          });
        }
      },
    );
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.PHONENUMBER} component={PhoneNumber} />
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
      <Stack.Screen name={Routes.EDITPROFILE} component={EditProfile} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
