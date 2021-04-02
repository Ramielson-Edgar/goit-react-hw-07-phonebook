import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import items from './contacts-reducer';
import storage from 'redux-persist/lib/storage';
import middleware from './middleware';

const contactsConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, items),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
