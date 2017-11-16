import React, {Component} from 'react'
import config from './config.json';
import styles from './header.css';

class Header extends Component{
  render() {
    return (
      <div className={styles.headerRoot}>
        {config.message}
      </div>
    );
  }
}

export default Header
