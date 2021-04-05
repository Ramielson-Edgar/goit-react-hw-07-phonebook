import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import Appearances from '../Filter/FilterAppearances.module.css';
import { contactsSelectors } from '../../Redux';
import * as action from '../../Redux/contacts-actions';

const Filter = ({ value, onChange, items }) => {
  return (
    <>
      <CSSTransition
        in={items.length > 1}
        timeout={250}
        classNames={Appearances}
        unmountOnExit
      >
        <div className={s.wrapper}>
          <p className={s.subtitle}>Find contacts by name</p>
          <input
            className={s.filter}
            type="text"
            value={value}
            onChange={onChange}
          />
        </div>
      </CSSTransition>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
  items: contactsSelectors.items(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(action.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
