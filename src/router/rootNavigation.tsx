import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TabNavigator from './tabNavigation';
import Routes from '../utils/routes';
import PhoneNumber from '../screens/profile/phoneNumber';
import {Pressable, Text} from 'react-native';
import Colors from '../utils/colors';

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
