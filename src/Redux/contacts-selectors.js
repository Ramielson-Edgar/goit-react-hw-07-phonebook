import { createSelector } from '@reduxjs/toolkit';

const loading = state => state.contacts.loading;
const items = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const error = state => state.contacts.error;

const getVisibleContacts = createSelector(
  [items, getFilter],
  (allContacts, filter) => {
    const mormalizerFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(mormalizerFilter),
    );
  },
);

const selectors = {
  loading,
  items,
  getVisibleContacts,
  getFilter,
  error,
};

export default selectors;
