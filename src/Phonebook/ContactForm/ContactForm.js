import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { contactsOperations, contactsSelectors } from '../../Redux';
import PropTypes from 'prop-types';
import MyPnotify from '../MyPnotify';
import s from './ContactForm.module.css';
import '../../Alert.css';
import slideLogo from '../ContactForm/logoSlide.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    message: '',
  };

  componentDidMount() {
    this.props.fetch();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { name, number } = this.state;
    const { contacts } = this.props;
    const contact = contacts.find(contact => contact.name === name);

    if (contact) {
      this.setState({ message: 'This contact already exist!' });
      return;
    }

    if (name === '') {
      this.setState({ message: 'please enter contact  name  ' });
      return;
    }

    if (number === '') {
      this.setState({ message: 'please enter phone number' });
      return;
    }

    this.props.addcontact({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number, message } = this.state;
    const className = message !== '' ? 'fade' : 'hide';
    const hideAlert =
      message && setTimeout(() => this.setState({ message: '' }), 3000);

    return (
      <div>
        <MyPnotify
          className={className}
          hideAlert={Boolean(hideAlert)}
          message={message}
        />

        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames={slideLogo}
          unmountOnExit
        >
          <div>
            <h1 className="logo">Phonebook</h1>
          </div>
        </CSSTransition>

        <div className={s.wrapper}>
          <div className={s.inputContainer}>
            <h1 className={s.hedaline}>Welcome</h1>
            <form className={s.form} onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={this.handleChange}
                id={this.id}
                className={s.inputName}
              />

              <input
                type="text"
                name="number"
                placeholder="+38(097) 9732 656 "
                value={number}
                onChange={this.handleChange}
                id={this.id}
                className={s.inputNumber}
              />
              <button className={s.btn} type="submit">
                Add contact
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
// // ContactForm.propTypes = {
// //   contacts: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       name: PropTypes.string,
// //       number: PropTypes.string,
// //       handleChange: PropTypes.func,
// //       id: PropTypes.number,
// //     }),
// //   ),
// // };

const mapStateToProps = state => ({
  contacts: contactsSelectors.items(state),
});

const mapDispatchToProps = dispatch => ({
  addcontact: ({ name, number }) =>
    dispatch(contactsOperations.addContact({ name, number })),
  fetch: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
