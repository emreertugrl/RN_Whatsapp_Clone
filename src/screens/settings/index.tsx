import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import Colors from '../../utils/colors';
import ProfileCard from '../../components/settings/profileCard';
import {
  ArrowRight2,
  ArrowSwapVertical,
  CommandSquare,
  Heart,
  Key,
  Notification,
  Star1,
  Warning2,
  Whatsapp,
} from 'iconsax-react-nativejs';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../utils/routes';

const Settings: React.FC = () => {
  const navigation = useNavigation();
  const web = [
    {
      title: 'Starred Messages',
      icon: <Star1 color={Colors.WHITE} variant="Bold" />,
      backgroundColor: Colors.YELLOW_2,
    },
    {
      title: 'WhatsApp Web/Desktop',
      icon: <CommandSquare color={Colors.WHITE} />,
      backgroundColor: Colors.GREEN_4,
    },
  ];
  const menu = [
    {
      title: 'Account',
      icon: <Key color={Colors.WHITE} variant="Bold" />,
      backgroundColor: Colors.BLUE_2,
    },
    {
      title: 'Chats',
      icon: <Whatsapp color={Colors.WHITE} />,
      backgroundColor: Colors.GREEN_3,
    },
    {
      title: 'Notifications',
      icon: <Notification color={Colors.WHITE} />,
      backgroundColor: Colors.RED_1,
    },
    {
      title: 'Data and Storage Usage',
      icon: <ArrowSwapVertical color={Colors.WHITE} />,
      backgroundColor: Colors.GREEN_3,
    },
  ];
  const help = [
    {
      title: 'Help',
      icon: <Warning2 color={Colors.WHITE} />,
      backgroundColor: Colors.BLUE_1,
    },
    {
      title: 'Tell a Friend',
      icon: <Heart color={Colors.WHITE} />,
      backgroundColor: Colors.RED_1,
    },
  ];
  return (
    <SafeAreaView style={defaultScreenStyle.safeArea}>
      <View style={defaultScreenStyle.container}>
        <ScrollView>
          <ProfileCard />
          <View style={styles.iconContainer}>
            {web.map((item, index) => (
              <Pressable key={index} style={styles.iconBox}>
                <Text
                  style={[
                    styles.icon,
                    {backgroundColor: item.backgroundColor},
                  ]}>
                  {item.icon}
                </Text>
                <Text style={styles.iconName}>{item.title}</Text>
                <ArrowRight2 size={20} color={Colors.GRAY_2} />
              </Pressable>
            ))}
          </View>
          <View style={styles.iconContainer}>
            {menu.map((item, index) => (
              <Pressable
                onPress={() =>
                  item.title === 'Account'
                    ? navigation.navigate(Routes.EDITPROFILE)
                    : ''
                }
                key={index}
                style={styles.iconBox}>
                <Text
                  style={[
                    styles.icon,
                    {backgroundColor: item.backgroundColor},
                  ]}>
                  {item.icon}
                </Text>
                <Text style={styles.iconName}>{item.title}</Text>
                <ArrowRight2 size={20} color={Colors.GRAY_2} />
              </Pressable>
            ))}
          </View>
          <View style={styles.iconContainer}>
            {help.map((item, index) => (
              <Pressable key={index} style={styles.iconBox}>
                <Text
                  style={[
                    styles.icon,
                    {backgroundColor: item.backgroundColor},
                  ]}>
                  {item.icon}
                </Text>
                <Text style={styles.iconName}>{item.title}</Text>
                <ArrowRight2 size={20} color={Colors.GRAY_2} />
              </Pressable>
            ))}
          </View>
          <View style={styles.bottomText}>
            <Text style={styles.text}>WhatsApp from Facebook</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.WHITE,
  },
  iconContainer: {
    backgroundColor: Colors.WHITE,
    marginTop: 10,
    padding: 10,
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
    backgroundColor: Colors.GRAY_3,
    marginVertical: 1,
    padding: 10,
    borderRadius: 10,
  },
  iconName: {
    fontSize: 20,
    flex: 1,
  },
  icon: {
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    padding: 5,
  },
  bottomText: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: Colors.GRAY_2,
    fontSize: 15,
  },
});

export default Settings;
