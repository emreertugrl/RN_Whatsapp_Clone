import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
// Bu 2 tipi **dışa aktar**
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
