import react from 'react';
import Blogone from './Blogone';
// import { useNavigate } from 'react-router-dom';
import styles from '../Styles/BlogsStyles.module.css';
import { CgMoreVerticalR } from "react-icons/cg";

const Blogs = () => {



    const backgroundImageStyle = {
        backgroundImage: `url('https://i.pinimg.com/originals/62/39/4d/62394d753859943e6a1a36443ef78795.gif')`,// `url('https://hellofuture.orange.com/app/uploads/2018/01/Intro-HELLO-FUTURE-1920x1080_v2.gif')`, 
        height: '500px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    };

    return (
        <>
            {/* <div className={styles.indexContainer}><h4>Blogs and Insights</h4></div> */}
            {/* <h4 className={styles.title}>Blogs and Insights</h4> */}
            <div className={styles.parentContainer} style={backgroundImageStyle}>




                <div className={styles.displayContainer}><Blogone /></div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button} ><CgMoreVerticalR />{' '}Read More</button>

                </div>
            </div>


        </>

    );
};

export default Blogs;