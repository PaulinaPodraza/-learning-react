import React from 'react';
import styles from './Hero.scss';
import img from '../../image/space.jpg';


class Hero extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>Things to do</h2>
        <image className={styles.image} src={img}></image>
      </header>
    )
  }
}
export default Hero;