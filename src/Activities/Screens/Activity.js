import React from "react";
import styles from '../Styles/activities.module.css';
import Image from '../../Assets/shared image.jpg';
import CustomerFocus from '../../Assets/customerFocus.png';
 
 
 
 
const Activity = () => {
 
 
    return (
        <div className={styles.mainDiv}>
            <div className={styles.innerContainer}>
 
           
            <div className={styles.doContainer}>
                <h3 className={styles.hTitle}>What We do?</h3>
                <p className={styles.textSpan}>
                We create smart solutions that help our clients grow. With fresh ideas, honest practices, and a strong focus on customer needs, we build trust and deliver real results. Our goal is to make a positive difference — for our clients, our partners, and our community.
 
 
                </p>
            </div>
            <div className={styles.wrapper}>
 
 
                <div className={styles.container}>
 
                    <div className={styles.title}>
                        <h5>Innovative Ideas</h5>
 
                    </div>
                    <div className={styles.imgContainer}>
                        <img src="https://www.q3tech.com/wp-content/uploads/2024/01/AI-1-1.jpg" alt="Images" />
                    </div>
                    <div className={styles.content}>
                        <p>We partner and provide top-notch Oracle solutions to businesses and professionals and aid their success</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h5>Fairness & Integrity
                        </h5>
 
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={Image} alt="Images" />
                    </div>
                    <div className={styles.content}>
                        <p>With world-wide clients, we reach out to any place, any price-range in all possible ways !!</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h5>Customer Focus  </h5>
 
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={CustomerFocus} alt="Images" />
                    </div>
                    <div className={styles.content}>
                        <p>Our great dedication and world-class services have fetched an absolute 5 star rating from the clients</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
 
}
 
 
export default Activity;
 