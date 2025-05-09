import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomInput from '../../components/ui/input';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  setName,
  setPhoneNumber,
  setStatus,
  setSurname,
} from '../../store/slice/authSlice';
import {createUser} from '../../store/actions/authActions';
import {useNavigation} from '@react-navigation/native';
import FloatActionButton from '../../components/ui/floatActionButton';
import {Add} from 'iconsax-react-nativejs';

const UserRegistirationInfo: React.FC = () => {
  const {name, phoneNumber, surname, status} = useAppSelector(
    state => state.auth,
  );
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
      <CustomInput
        value={status}
        onChange={(value: string) => dispatch(setStatus(value))}
        placeholder="status"
      />

      <FloatActionButton
        icon={<Add size={50} color="white" />}
        onPress={() =>
          dispatch(createUser({name, surname, phoneNumber, status, navigation}))
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
