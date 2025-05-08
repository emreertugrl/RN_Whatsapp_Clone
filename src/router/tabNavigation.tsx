import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Routes from '../utils/routes';
import {Calls, Chats, Contacts, Settings, Status} from '../screens';
import Colors from '../utils/colors';
import TabIcon from '../components/router/tabIcon';

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
      <Tab.Screen name={Routes.CHATS} component={Chats} />
      <Tab.Screen name={Routes.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
