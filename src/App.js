import React, { memo } from 'react';
import Players from './containers/Players';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Players />
    </div>
  );
}

export default memo(App);
