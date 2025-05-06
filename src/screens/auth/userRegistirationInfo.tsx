import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import CustomInput from '../../components/ui/input';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setName, setPhoneNumber, setSurname} from '../../store/slice/authSlice';
import {createUser} from '../../store/actions/authActions';
import {useNavigation} from '@react-navigation/native';

const UserRegistirationInfo: React.FC = () => {
  const {name, phoneNumber, surname} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomInput
        value={phoneNumber}
        onChange={(value: string) => dispatch(setPhoneNumber(value))}
        placeholder="Phone Number"
      />
      <CustomInput
        value={name}
        onChange={(value: string) => dispatch(setName(value))}
        placeholder="Name"
      />
      <CustomInput
        value={surname}
        onChange={(value: string) => dispatch(setSurname(value))}
        placeholder="Surname"
      />
      <Button
        title="Kaydol"
        onPress={() =>
          dispatch(createUser({name, surname, phoneNumber, navigation}))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserRegistirationInfo;
