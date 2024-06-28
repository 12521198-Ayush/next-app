import React from 'react'
import styles from '../Home.module.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Profile from '../../Components/Sidebar/Profile.jsx'
function page() {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
    <Sidebar />    
    services page
    </main>
    {/* <Profile/> */}
    </div>
  )
}

export default page 