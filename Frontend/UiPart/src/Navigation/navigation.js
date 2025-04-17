import React from 'react';
import styles from './navigation.module.css'
import { Link } from 'react-router-dom';


const SubHeader =  ( {  name } ) =>{

return(
   <div className={styles.wrapper}>
          {/* <div className={styles.sectionName}>
             <p>{name}</p>
          </div> */}
          <div className={styles.nav}>
          <p><Link to= {'/'}>Home</Link>     </p>
          
          
         <p>  &gt;&gt; <span>{name}</span></p>

          </div>
   </div>
)







}
export default SubHeader