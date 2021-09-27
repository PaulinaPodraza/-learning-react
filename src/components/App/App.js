import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import { pageContents, listData } from '../../data/dataStore';


class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} img='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png' />
      </main>
    );
  }
}

export default App;
