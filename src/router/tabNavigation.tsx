import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Routes from '../utils/routes';
import {Calls, Camera, Chats, Contacts, Settings, Status} from '../screens';
import Colors from '../utils/colors';
import TabIcon from '../components/router/tabIcon';
import {Edit} from 'iconsax-react-nativejs';
import {Pressable, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: Colors.GRAY_3,
        },
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon size={size} color={color} focused={focused} route={route} />
        ),
        tabBarActiveTintColor: Colors.BLUE_1,
        tabBarInactiveTintColor: Colors.GRAY_1,
      })}>
      <Tab.Screen name={Routes.STATUS} component={Status} />
      <Tab.Screen name={Routes.CALLS} component={Calls} />
      <Tab.Screen name={Routes.CONTACTS} component={Contacts} />
      <Tab.Screen
        options={({navigation}) => ({
          headerLeft: () => (
            <Pressable
              style={{marginLeft: 20}}
              onPress={() => navigation.navigate(Routes.TAB)}>
              <Text style={{color: Colors.BLUE_1, fontSize: 18}}>Edit</Text>
            </Pressable>
          ),
          headerTitleStyle: {
            paddingRight: 40,
          },
          headerRight: () => (
            <Pressable
              style={{marginRight: 20}}
              onPress={() => {
                navigation.navigate(Routes.CONTACTS);
              }}>
              <Text style={{fontSize: 18}}>
                <Edit color={Colors.BLUE_1} />
              </Text>
            </Pressable>
          ),
        })}
        name={Routes.CHATS}
        component={Chats}
      />
      <Tab.Screen name={Routes.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
