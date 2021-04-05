import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './contacts-reducer';
import middleware from './middleware/middleware';

const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
