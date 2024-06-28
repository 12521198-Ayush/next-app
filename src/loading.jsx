// components/loading.jsx
import React from 'react';
import styles from './loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
