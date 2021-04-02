import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './Phonebook/ContactForm';
import ContactList from './Phonebook/ContactList';
import Filter from './Phonebook/Filter';
import Loader from './loader/Loader';
import { contactsSelectors } from './Redux';
import Container from './Container';
import Modal from './Modal';
import '../src/bases.css';

class App extends Component {
  state = {
    isModalOpen: false,
  };

  toogleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { error } = this.props;
    const showSpinner = this.props.isLoadingContacts && <Loader />;
    return (
      <>
        <div>
          <Container>
            {error && !isModalOpen && (
              <Modal error={error} onClose={this.toogleModal} />
            )}
            <ContactForm />
            <Filter />
            <ContactList />
            {showSpinner}
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.loading(state),
  error: contactsSelectors.error(state),
});

export default connect(mapStateToProps, null)(App);
