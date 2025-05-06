import {createSlice} from '@reduxjs/toolkit';
import {ChatTypes} from '../../modals/data/chats/chat';

const initialState: ChatTypes = {
  messages: [],
};
const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder;
  },
});

export const {} = chatSlice.actions;
export default chatSlice.reducer;
