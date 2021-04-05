import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as action from './contacts-actions';

const items = createReducer([], {
  [action.fetchContactsSuccess]: (_, { payload }) => payload,
  [action.addContactsSuccess]: (state, { payload }) => [...state, payload],
  [action.delteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [action.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [action.addContactsRequest]: () => true,
  [action.addContactsSuccess]: () => false,
  [action.addContactsError]: () => false,

  [action.delteContactsRequest]: () => true,
  [action.delteContactsSuccess]: () => false,
  [action.delteContactsError]: () => false,

  [action.fetchContactsRequest]: () => true,
  [action.fetchContactsSuccess]: () => false,
  [action.fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [action.fetchContactsError]: (_, { payload }) => payload,
  [action.delteContactsError]: (_, { payload }) => payload,
  [action.addContactsError]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
