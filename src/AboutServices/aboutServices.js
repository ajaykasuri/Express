import styles from './aboutServices.module.css';






const AboutService = ()=>{



return(

    <div id={styles.serviceContainer}>
    <h3>Our Services</h3>
    <div id={styles.outerWrapper}>
        <div id={styles.innerWrapper}>

        <div id={styles.eachService}>
           <div className={styles.firstRow}>
               <h5>ERP Implementations</h5>
               <h6>ERP Implementations streamline and integrate core business processes through a unified software solution.</h6>
           </div>
           <div className={styles.firstRow}>
           <h5>Application Integration Services</h5>
               <h6>Application Integration Services enable seamless communication and data flow between different software systems to enhance operational efficiency.</h6>
           </div>
           <div className={styles.firstRow}>
           <h5>Managed Services</h5>
           <h6>Managed Services provide proactive IT support and maintenance, ensuring systems run smoothly and efficiently with minimal downtime.</h6>
           </div>
        </div>
       
        <div id={styles.eachService1}>
            <div className={styles.vContainer}>

           
        <div className={styles.topBox}>
           <div className={styles.topBoxLeft}>

           </div>
           <div className={styles.topBoxRight}>

</div>
           <span></span>
        </div>








        <div  className={styles.bottomBox}>
        <div className={styles.bottomBoxLeft}>

</div>
<span id={styles.spans}></span>
<div className={styles.bottomBoxRight}>

</div>
<span></span>
<span id={styles.lastBox}></span>
        </div>
       
        </div>
        </div>
        <div id={styles.eachService2}>
        <div className={`${styles.firstRow} ${styles.rightRow}`}>
        <h5>Exhaustive Testing Services</h5>
               <p>Exhaustive Testing Services ensure software quality and reliability through comprehensive testing across all functionalities and use cases.</p>
           </div>
           <div className={`${styles.firstRow} ${styles.rightRow}`}>
           <h5>Cloud Consulting & Advisory</h5>
               <p>
               Cloud Consulting & Advisory services help businesses strategize, migrate, and optimize their operations in the cloud for agility and scalability.</p>
           </div>
           <div className={`${styles.firstRow} ${styles.rightRow}`}>
           <h5>Web development</h5>
           <p>Web Development involves designing and building responsive, user-friendly websites and web applications tailored to business needs.</p>
           </div>
        </div>
    </div>
    </div>
  </div>
)




}



export default AboutService