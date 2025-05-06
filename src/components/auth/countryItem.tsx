import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import Colors from '../../utils/colors';
import {CountryItemProps} from '../../modals/ui/countryItemProps';
import {useAppDispatch} from '../../store/hooks';
import {setCountry} from '../../store/slice/authSlice';
import {useNavigation} from '@react-navigation/native';

const CountryItem: React.FC<CountryItemProps> = ({item}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  // console.log(item);
  return (
    <Pressable
      onPress={() => {
        dispatch(setCountry(item));
        navigation.goBack();
      }}
      style={styles.container}>
      <Text style={styles.text}>{item.country}</Text>
      <Text style={styles.text}>{item.code}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: Colors.BLACK,
  },
});

export default CountryItem;
