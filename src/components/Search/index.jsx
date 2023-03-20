import React from 'react';
import {ImLocation2} from 'react-icons/im';
import {MdOutlineSearch} from 'react-icons/md'
import styles from './styles.module.scss';

function Search() {
  return (
    <div className={styles.container}>
        <div><ImLocation2/> </div>
        <div><p> Current Location, California</p></div>
        <div className={styles.search}><MdOutlineSearch /> </div>
    </div>
  )
}

export default Search