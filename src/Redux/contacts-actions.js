import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactsSuccess = createAction('contacts/addContactsSuccess');
export const addContactsError = createAction('contacts/addContactsError');

export const delteContactsRequest = createAction(
  'contacts/delteContactsRequest',
);
export const delteContactsSuccess = createAction(
  'contacts/delteContactsSuccess',
);
export const delteContactsError = createAction('contacts/delteContactsError');

export const errorTypeSuccess = createAction('contacts/errorTypeSuccess');
export const changeFilter = createAction('action/change-filter');
