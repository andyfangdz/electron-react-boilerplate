// @flow
import React, { Component } from 'react';
import styles from './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h1>Hello Electron React!</h1>
        </div>
      </div>
    );
  }
}
