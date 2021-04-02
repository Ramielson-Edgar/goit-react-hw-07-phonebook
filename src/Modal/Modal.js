import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onHandlekeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onHandlekeydown);
  }

  onHandlekeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  onHandleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { error } = this.props;
    return createPortal(
      <div className={s.overlay} onClick={this.onHandleOverlayClick}>
        <>
          <div className={s.modal}>
            <div className={s.container}>
              <h2 className={s.headlineError}>{error}</h2>
              <p className={s.messageError}>
                Something went wrong, please try again!
              </p>
              <button
                className={s.btn}
                type="close-modal"
                onClick={this.onHandleOverlayClick}
              >
                Close
              </button>
            </div>
          </div>
        </>
        ,
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {};

export default Modal;
