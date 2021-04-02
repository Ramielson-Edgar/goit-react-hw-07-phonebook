import { contactsOperations, contactsSelectors } from '../../Redux';
import { connect } from 'react-redux';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: contactId => dispatch(contactsOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
