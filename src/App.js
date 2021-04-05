import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './Phonebook/ContactForm';
import ContactList from './Phonebook/ContactList';
import Filter from './Phonebook/Filter';
import Loader from './Component/Container';
import { contactsSelectors } from './Redux';
import Container from './Component/Container';
import '../src/bases.css';

const App = ({ isLoadingContacts }) => {
  return (
    <>
      <div>
        <Container>
          <ContactForm />
          <Filter />
          <ContactList />
          {isLoadingContacts && <Loader />}
        </Container>
      </div>
    </>
  );
};

App.propTypes = {};

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.loading(state),
  error: contactsSelectors.error(state),
});

export default connect(mapStateToProps, null)(App);
