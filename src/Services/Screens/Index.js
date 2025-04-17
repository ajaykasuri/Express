import react from 'react';
 //import styles from '../Styles/Footer.module.css';

import styles from '../Styles/FooterDraft.module.css';
import LottieReact from '../../LottieReact';

const Footer = () => {

    return (

        <>
            <div className={styles.body}>


                <div className={styles.divContainer}>

                    <div className={styles.leftContainer}>

                        <div className={styles.mainLeftContainer}>

                            <div className={styles.leftServicesCon}>

                                <div className={styles.servicesContainer}>
                                    <h2 className={styles.servicesTitle}>Services</h2>
                                    <ul className={styles.servicesList}>
                                        <li>ERP Implementations</li>
                                        <li>Application Integration Services</li>
                                        <li>Quality Engineering</li>
                                        <li>Managed Services</li>
                                        <li>Exhaustive Testing Services</li>
                                        <li>Cloud Consulting & Advisory</li>
                                        <li>Web Applications Development</li>
                                        <li>Mobile Application Development</li>
                                        <li>Custom Software Development</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.toolsCon}>

                                <div className={styles.servicesContainer}>
                                    <h2 className={styles.servicesTitle}>Tools</h2>
                                    <ul className={styles.servicesList}>
                                        <li>Oracle E-Business Suite (EBS)</li>
                                        <li>Oracle Cloud</li>
                                        <li>Oracle Visual Builder Cloud Service (VBCS)</li>
                                        <li>Oracle APEX (Application Express)</li>
                                        <li>Oracle Cloud Infrastructure (OCI)</li>
                                        <li>Oracle Integration Cloud (IntelliNEM)</li>
                                        <li>React JS</li>
                                        <li>React Native</li>
                                    </ul>
                                </div>
                            </div>

                        <div className={styles.dataCon}>

                            <div className={styles.dataContainer}>
                                    <h2 className={styles.dataTitle}>Data</h2>
                                    <ul className={styles.dataList}>
                                        <li>Data Management</li>
                                        <li>Data Visualization</li>
                                        <li>Data Analysis</li>
                                        <li>Business Intelligence (BI)</li>
                                        <li>Predictive Analytics</li>
                                    </ul>
                                </div>

                            <div className={styles.dataContainer}>
                                    <h2 className={styles.dataTitle}>Blogs and Insights</h2>
                                    <ul className={styles.dataList}>
                                        <li>Data Management</li>
                                        <li>Data Visualization</li>
                                        <li>Data Analysis</li>
                                        <li>Business Intelligence (BI)</li>
                                        <li>Predictive Analytics</li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={styles.rightContainer}>
                        <div className={styles.rightMapCon}>

                            <div className={styles.mainRightContainer}>

                                <div className={styles.addressContainer}>
                                    <h2 className={styles.addressTitle}>Get in Touch</h2>
                                    <ul className={styles.addressList}>
                                        <li>Hyderabad, India</li>
                                        <li>+91 6303593501</li>
                                        <li>info@globalsparktek.com</li>

                                    </ul>
                                </div>

                                <div className={styles.mapCon}>

                                    <div className={styles.servicesContainer}>
                                        <LottieReact />
                                        {/* <h2 className={styles.servicesTitle}>Map</h2> */}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>


            </div>



        </>

    );
};

export default Footer;