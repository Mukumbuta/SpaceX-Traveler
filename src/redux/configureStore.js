import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsSlice.reducer,
  },
});

export default store;
