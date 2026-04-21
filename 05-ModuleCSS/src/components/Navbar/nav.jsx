import React from 'react'
import styles from './nav.module.css'
const nav = () => {
  return (
   

<div>
<div className={styles.nav}>
    <div className={styles.home}>
        <h3>Home</h3>
    </div>
    <div className={styles.about}>
       <h3>about</h3> 
    </div>
    <div className={styles.cnct}>
        <h3>ConnectUS</h3>
    </div>
</div>
<div className={styles.btn}>
        <button>Apply Now</button>
    </div>
</div> 
    
  )
}

export default nav
