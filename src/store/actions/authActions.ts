import {createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import Routes from '../../utils/routes';

const getCountriesCode = createAsyncThunk('auth/getCountriesCode', async () => {
  try {
    const response = await firestore().collection('countries').get();
    const data = response.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    console.log(error);
  }
});

const createUser = createAsyncThunk(
  'auth/createUser',
  async ({
    name,
    surname,
    phoneNumber,
    navigation,
  }: {
    name: string;
    surname: string;
    phoneNumber: string;
  }) => {
    console.log(name, surname, phoneNumber);
    try {
      firestore()
        .collection('Users')
        .doc(phoneNumber)
        .set({
          phoneNumber: phoneNumber,
          name: name,
          surname: surname,
          lastSeen: firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          navigation.navigate(Routes.TAB);
        });
    } catch (error) {
      console.log(error);
    }
  },
);

export {getCountriesCode, createUser};
