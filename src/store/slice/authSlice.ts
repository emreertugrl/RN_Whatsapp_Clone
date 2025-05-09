import {createSlice} from '@reduxjs/toolkit';
import {CountryiesTypes} from '../../modals/data/auth/auth';
import {getCountriesCode} from '../actions/authActions';

const initialState: CountryiesTypes = {
  phoneNumber: '5555555555',
  surname: 'ertugrul',
  name: 'emre',
  status: 'Müsait',
  countries: [],
  pendingCountryCode: false,
  selectedCountry: {
    id: 1,
    code: '+90',
    country: 'Türkiye',
  },
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCountriesCode.pending, state => {
        state.pendingCountryCode = true;
      })
      .addCase(getCountriesCode.fulfilled, (state, action) => {
        state.pendingCountryCode = false;
        state.countries = action.payload;
      })
      .addCase(getCountriesCode.rejected, (state, action) => {
        state.pendingCountryCode = false;
      });
  },
});

export const {setCountry, setPhoneNumber, setName, setSurname, setStatus} =
  authSlice.actions;
export default authSlice.reducer;
