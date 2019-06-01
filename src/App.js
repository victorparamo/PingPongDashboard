import React, { memo } from 'react';
import Players from './containers/Players';
import Header from './containers/Header';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Players />
    </div>
  );
}

export default memo(App);
