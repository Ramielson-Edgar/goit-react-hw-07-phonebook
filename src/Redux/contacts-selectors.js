import { createSelector } from '@reduxjs/toolkit';

const loading = state => state.contacts.loading;
const items = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const error = state => state.contacts.error;

const getVisibleContacts = createSelector(
  [items, getFilter],
  (allitems, filter) => {
    const normalizer = filter.toLowerCase();

    return allitems.filter(({ name }) =>
      name.toLowerCase().includes(normalizer),
    );
  },
);

export default { loading, items, getVisibleContacts, getFilter, error };
