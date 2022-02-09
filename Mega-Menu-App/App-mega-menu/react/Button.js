import React from 'react'
import styles from './Button.css'

function Button() {
  return (
    <a href="/">
      <button className={styles.btn}>Sign Up</button>
    </a>
  )
}

export default Button
