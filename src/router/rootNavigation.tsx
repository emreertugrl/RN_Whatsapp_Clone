import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TabNavigator from './tabNavigation';
import Routes from '../utils/routes';
import PhoneNumber from '../screens/profile/phoneNumber';
import {Pressable, Text} from 'react-native';
import Colors from '../utils/colors';
import CountryCode from '../screens/auth/countryCode';
import UserRegistirationInfo from '../screens/auth/userRegistirationInfo';
import {Contacts} from '../screens';
import Messages from '../screens/chats/message';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator>
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
      <Stack.Screen name={Routes.CONTACTS} component={Contacts} />
      <Stack.Screen name={Routes.MESSAGES} component={Messages} />
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
    </Stack.Navigator>
  );
};

export default RootNavigator;
