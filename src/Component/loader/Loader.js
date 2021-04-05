import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './loader.module.css';

const Fallback = () => {
  return (
    <Loader
      className={s.fallbackContainer}
      type="TailSpin"
      color="#00BFFF"
      height={80}
      width={80}
    />
  );
};

export default Fallback;
