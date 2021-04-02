import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ReactComponent as IconDelete } from '../IconButton/svg/Delete.svg';
import IconButtonDelete from '../IconButton/IconButton';
import slide from '../ContactList/item.module.css';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onRemove }) => {
  return (
    <>
      <TransitionGroup component="ul" className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <CSSTransition
            key={id}
            timeout={250}
            classNames={slide}
            unmountOnExit
          >
            <li key={id} className={s.item}>
              <strong>{name}</strong>
              <p>{number}</p>
              <IconButtonDelete
                id={id}
                onRemove={onRemove}
                arial-lable="delete-contacts"
              >
                <IconDelete width="16" height="16" fill="white" />
              </IconButtonDelete>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

export default ContactList;
