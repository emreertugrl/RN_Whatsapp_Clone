import {createSlice} from '@reduxjs/toolkit';
import {Country, CountryiesTypes} from '../../modals/data/auth/auth';
import {getCountriesCode} from '../actions/authActions';

const initialState: CountryiesTypes = {
  phoneNumber: '',
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

export const {setCountry, setPhoneNumber} = authSlice.actions;
export default authSlice.reducer;
