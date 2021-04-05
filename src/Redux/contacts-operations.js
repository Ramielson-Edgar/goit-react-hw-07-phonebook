import axios from 'axios';
import * as action from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  dispatch(action.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(action.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(action.fetchContactsError(error.message));
  }
};

const addContact = ({ name, number }) => async dispatch => {
  dispatch(action.addContactsRequest());

  try {
    const contacts = { name, number };
    const { data } = await axios.post('/contacts', contacts);
    dispatch(action.addContactsSuccess(data));
  } catch (error) {
    dispatch(action.addContactsError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(action.delteContactsRequest());

  try {
    const { _ } = await axios.delete(`/contacts/${contactId}`);
    dispatch(action.delteContactsSuccess(contactId));
  } catch (error) {
    dispatch(action.delteContactsError(error.message));
  }
};

const erroTypeMessage = error => ({
  type: action.errorTypeSuccess,
  payload: error,
});

const changeFilter = value => ({
  type: action.changeFilter,
  payload: value,
});

export default {
  addContact,
  deleteContact,
  changeFilter,
  fetchContacts,
  erroTypeMessage,
};
