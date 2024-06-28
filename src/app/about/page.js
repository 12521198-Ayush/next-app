import React from 'react'
import SidebarMenu from '../../Components/Sidebar/SidebarMenu.jsx'
import styles from '../Home.module.css';
 

function page() {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
    <SidebarMenu />    
    About page
    </main>
    
    </div>
  )
}

export default page 