import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {TabIconProps} from '../../modals/ui/tabIconProps';
import Routes from '../../utils/routes';
const icons = {
  [Routes.STATUS]: {
    focused: require('../../assets/icons/statusIcon.png'),
    unfocused: require('../../assets/icons/statusIcon.png'),
  },
  [Routes.CALLS]: {
    focused: require('../../assets/icons/callsFill.png'),
    unfocused: require('../../assets/icons/callsIcon.png'),
  },
  [Routes.CAMERA]: {
    focused: require('../../assets/icons/cameraFill.png'),
    unfocused: require('../../assets/icons/cameraIcon.png'),
  },
  [Routes.CHATS]: {
    focused: require('../../assets/icons/chatsFill.png'),
    unfocused: require('../../assets/icons/chatsIcon.png'),
  },
  [Routes.SETTINGS]: {
    focused: require('../../assets/icons/settingsFill.png'),
    unfocused: require('../../assets/icons/settingsIcon.png'),
  },
};
const TabIcon: React.FC<TabIconProps> = ({color, focused, route, size}) => {
  const name = route.name as keyof typeof icons;
  const iconSource = icons[name][focused ? 'focused' : 'unfocused'];

  return (
    <Image
      source={iconSource}
      style={{
        width: size,
        height: size,
        tintColor: color,
        resizeMode: 'contain',
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabIcon;
