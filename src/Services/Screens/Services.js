import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from '../Styles/services.module.css';
import Footer from "../../Home/Screens/Footer";
import Header from "../../Home/Screens/Header";
import ContentFooter from "../../Services/Screens/ContentFooter";

const Services = () => {
    const [searchParams] = useSearchParams();
    const serviceId = searchParams.get('service');

    // Define services data
    const servicesData = [
        {
            id: 'apex',
            name: 'Oracle APEX',
            image: require('../../Assets/apex.jfif'),
            content: (
                <div className={styles.contentCardInner}>
                    <h2 className={styles.title}>Oracle APEX Development</h2>
                    <p className={styles.subtitle}>Rapid Innovation, Simplified</p>
                    <p>Build robust applications faster than ever with our APEX expertise:</p>
                    <ul className={styles.featureList}>
                        <li>Low-code platform for quick deployment</li>
                        <li>Responsive web applications for all devices</li>
                        <li>Mobile-first design with modern UI</li>
                        <li>Seamless integration with Oracle databases</li>
                        <li>Custom plugins and extensions</li>
                    </ul>
                    <div className={styles.interactiveSection}>
                        <div className={styles.demoPreview}>
                            <span className={styles.previewText}>Live Preview Available</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'ebs',
            name: 'Oracle E-Business Suite',
            image: require('../../Assets/ebs.jfif'),
            content: (
                <div className={styles.contentCardInner}>
                    <h2 className={styles.title}>Oracle E-Business Suite</h2>
                    <p className={styles.subtitle}>Enterprise Excellence Unleashed</p>
                    <p>Streamline your business operations with our EBS solutions:</p>
                    <ul className={styles.featureList}>
                        <li>Advanced financial management tools</li>
                        <li>Supply chain optimization strategies</li>
                        <li>Comprehensive HR management systems</li>
                        <li>Custom extensions for unique needs</li>
                        <li>Data-driven decision-making support</li>
                    </ul>
                </div>
            )
        },
        // {
        //     id: 'oracle-adf',
        //     name: 'Oracle ADF',
        //     image: require('../../Assets/OracleADF.jfif'),
        //     content: (
        //         <div className={styles.contentCardInner}>
        //             <h2 className={styles.title}>Oracle ADF</h2>
        //             <p className={styles.subtitle}>Enterprise Development, Redefined</p>
        //             <p>Create sophisticated applications with ease:</p>
        //             <ul className={styles.featureList}>
        //                 <li>Java EE framework for stability</li>
        //                 <li>Rich library of UI components</li>
        //                 <li>Advanced data visualization tools</li>
        //                 <li>End-to-end development lifecycle</li>
        //                 <li>Customizable workflows</li>
        //             </ul>
        //         </div>
        //     )
        // },
        {
            id: 'oracle-cloud',
            name: 'Oracle Cloud',
            image: require('../../Assets/oracle cloud.jfif'),
            content: (
                <div className={styles.contentCardInner}>
                    <h2 className={styles.title}>Oracle Cloud Solutions</h2>
                    <p className={styles.subtitle}>Elevate Your Business to New Heights</p>
                    <p>Transform your operations with our cutting-edge cloud services designed for the future:</p>
                    <ul className={styles.featureList}>
                        <li>Seamless cloud migration with zero downtime</li>
                        <li>Comprehensive IaaS, PaaS, and SaaS solutions</li>
                        <li>Scalable infrastructure for growing businesses</li>
                        <li>24/7 monitoring with AI-driven insights</li>
                        <li>Cost optimization and performance tuning</li>
                    </ul>
                    <div className={styles.interactiveSection}>
                        <div className={styles.stats}>
                            <span>99.9% Uptime</span>
                            <span>50+ Successful Migrations</span>
                        </div>
                    </div>
                </div>
            )
        },
        // {
        //     id: 'oracle-fusion',
        //     name: 'Oracle Fusion',
        //     image: require('../../Assets/OracleMiddleWare.png'),
        //     content: (
        //         <div className={styles.contentCardInner}>
        //             <h2 className={styles.title}>Oracle Fusion Middleware</h2>
        //             <p className={styles.subtitle}>Power Your Business Core</p>
        //             <p>Strengthen your infrastructure with:</p>
        //             <ul className={styles.featureList}>
        //                 <li>Seamless application integration</li>
        //                 <li>Business process management tools</li>
        //                 <li>Enterprise content management</li>
        //                 <li>Identity and access management</li>
        //                 <li>Performance optimization</li>
        //             </ul>
        //         </div>
        //     )
        // },
        // {
        //     id: 'oracle-integration',
        //     name: 'Oracle Integration',
        //     image: require('../../Assets/OracleIntegration.jfif'),
        //     content: (
        //         <div className={styles.contentCardInner}>
        //             <h2 className={styles.title}>Oracle Integration Services</h2>
        //             <p className={styles.subtitle}>Connect Everything, Everywhere</p>
        //             <p>Unify your systems with seamless integration:</p>
        //             <ul className={styles.featureList}>
        //                 <li>Pre-built adapters for 100+ applications</li>
        //                 <li>Automated business processes</li>
        //                 <li>Real-time analytics dashboards</li>
        //                 <li>Robust API management tools</li>
        //                 <li>Secure data synchronization</li>
        //             </ul>
        //         </div>
        //     )
        // },
        {
            id: 'oracle-integration-cloud',
            name: 'Oracle Integration Cloud',
            image: require('../../Assets/oic-1.png'),
            content: (
                <div className={styles.contentCardInner}>
                    <h2 className={styles.title}>Oracle Integration Cloud</h2>
                    <p className={styles.subtitle}>Cloud Connectivity, Simplified</p>
                    <p>Integrate your cloud ecosystem with:</p>
                    <ul className={styles.featureList}>
                        <li>100+ application connectors</li>
                        <li>Automated process workflows</li>
                        <li>Visual builder for rapid design</li>
                        <li>AI-driven predictive insights</li>
                        <li>Secure data transfer protocols</li>
                    </ul>
                </div>
            )
        },
        // {
        //     id: 'oracle-soasuite',
        //     name: 'Oracle SOA Suite',
        //     image: require('../../Assets/SOASuit.jfif'),
        //     content: (
        //         <div className={styles.contentCardInner}>
        //             <h2 className={styles.title}>Oracle SOA Suite</h2>
        //             <p className={styles.subtitle}>Service-Oriented Success</p>
        //             <p>Architect your future with SOA:</p>
        //             <ul className={styles.featureList}>
        //                 <li>Service orchestration and mediation</li>
        //                 <li>Business rules engine integration</li>
        //                 <li>Real-time event processing</li>
        //                 <li>B2B integration capabilities</li>
        //                 <li>Monitoring and analytics</li>
        //             </ul>
        //         </div>
        //     )
        // },
        {
            id: 'react',
            name: 'React JS',
            image: require('../../Assets/react.jfif'),
            content: (
                <div className={styles.contentCardInner}>
                    <h2 className={styles.title}>React Development</h2>
                    <p className={styles.subtitle}>Modern Web, Made Simple</p>
                    <p>Build dynamic, high-performance web applications:</p>
                    <ul className={styles.featureList}>
                        <li>Component-based architecture for scalability</li>
                        <li>Lightning-fast rendering with Virtual DOM</li>
                        <li>Advanced state management solutions</li>
                        <li>Reusable UI components for consistency</li>
                        <li>SEO-friendly single-page applications</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'react-native',
            name: 'React Native',
            image: require('../../Assets/react native.jfif'),
            content: (
                <div className={styles.contentCardInner}>
                    <h2 className={styles.title}>React Native Apps</h2>
                    <p className={styles.subtitle}>One Code, All Platforms</p>
                    <p>Develop powerful mobile apps with a single codebase:</p>
                    <ul className={styles.featureList}>
                        <li>Native performance on iOS and Android</li>
                        <li>Unified development for faster delivery</li>
                        <li>Accelerated development cycles</li>
                        <li>Rich, customizable UI components</li>
                        <li>Over-the-air updates support</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'vbcs',
            name: 'Oracle VBCS',
            image: require('../../Assets/vbcs1.png'),
            content: (
                <div className={styles.contentCardInner}>
                    <h2 className={styles.title}>Visual Builder Cloud Service</h2>
                    <p className={styles.subtitle}>Design Meets Functionality</p>
                    <p>Create visually stunning applications effortlessly:</p>
                    <ul className={styles.featureList}>
                        <li>Intuitive drag-and-drop interface</li>
                        <li>Cross-platform web and mobile development</li>
                        <li>Deep integration with Oracle SaaS</li>
                        <li>Custom business logic implementation</li>
                        <li>Real-time preview capabilities</li>
                    </ul>
                </div>
            )
        },
    ];

    const [selectedService, setSelectedService] = useState(
        serviceId && servicesData.some(s => s.id === serviceId)
            ? serviceId
            : servicesData[0].id
    );

    useEffect(() => {
        if (serviceId && servicesData.some(s => s.id === serviceId)) {
            setSelectedService(serviceId);
        }
        window.scrollTo({ top: -50, behavior: 'smooth' });
    }, [serviceId]);

    // Sort servicesData alphabetically by name
    const sortedServicesData = [...servicesData].sort((a, b) => a.name.localeCompare(b.name));

    const selectedServiceData = servicesData.find(service => service.id === selectedService);

    return (
        <>
            <Header />
            <div className={styles.servicesContainer}>
                <div className={styles.sidebar}>
                    <h3 className={styles.sidebarTitle}>Our Technologies</h3>
                    <nav className={styles.nav}>
                        {sortedServicesData.map((service) => (
                            <button
                                key={service.id}
                                className={`${styles.navItem} ${selectedService === service.id ? styles.active : ''}`}
                                onClick={() => setSelectedService(service.id)}
                            >
                                <span className={styles.navText}>{service.name}</span>
                            </button>
                        ))}
                    </nav>
                </div>
                <div className={styles.contentArea}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.contentCard}>
                            {selectedServiceData ? (
                                <div className={styles.contentWithImage}>
                                    <div className={styles.imageContainer}>
                                        <img src={selectedServiceData.image} alt={selectedServiceData.name} className={styles.serviceImage} />
                                    </div>
                                    {selectedServiceData.content}
                                </div>
                            ) : (
                                <div className={styles.contentCardInner}>No service found</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ContentFooter />
            <Footer />
        </>
    );
};

export default Services;