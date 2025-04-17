import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/c.module.css';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
 
const CarouselServices = () => {
    const navigate = useNavigate();
    const images = [
        { src: require('../../Assets/apex.jfif'), name: "Oracle APEX", title: "Learn More", id: "apex" },
        // { src: require('../../Assets/oracle cloud.jfif'), name: "Oracle Cloud", title: "Learn More", id: "oracle-cloud" },
        { src: require('../../Assets/ebs.jfif'), name: "Oracle E-Business Suite", title: "Learn More", id: "ebs" },
        { src: require('../../Assets/oic-1.png'), name: "Oracle Integration Cloud", title: "Learn More", id: "oracle-integration-cloud" },
        { src: require('../../Assets/vbcs1.png'), name: "Oracle VBCS", title: "Learn More", id: "vbcs" },
      
        { src: require('../../Assets/react.jfif'), name: "React JS", title: "Learn More", id: "react" },
        { src: require('../../Assets/react native.jfif'), name: "React Native", title: "Learn More", id: "react-native" },
        // { src: require('../../Assets/OracleIntegration.jfif'), name: "Oracle Integration", title: "Learn More", id: "oracle-integration" },
        // { src: require('../../Assets/OracleADF.jfif'), name: "Oracle ADF", title: "Learn More", id: "oracle-adf" },
        // { src: require('../../Assets/OracleMiddleWare.png'), name: "Oracle Fusion", title: "Learn More", id: "oracle-fusion" },
        // { src: require('../../Assets/SOASuit.jfif'), name: "Oracle SOASuite", title: "Learn More", id: "oracle-soasuite" },
       
    ];
 
    const containerRef = useRef();
    const [scrollIndex, setScrollIndex] = useState(0);
    const totalSlides = Math.ceil(images.length / 6);
 
    const handleLearnMore = (serviceId) => {
        navigate(`/servicepage?service=${serviceId}`);
        console.log("serv", serviceId);
    };
 
    const handleScroll = (direction) => {
        const scrollAmount = containerRef.current.offsetWidth;
        if (direction === 'left') {
            setScrollIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
        } else {
            setScrollIndex((prev) => (prev + 1) % totalSlides);
        }
    };
 
    useEffect(() => {
        const interval = setInterval(() => {
            handleScroll('right');
        }, 10000);
        return () => clearInterval(interval);
    }, []);
 
    useEffect(() => {
        const scrollAmount = containerRef.current.offsetWidth;
        containerRef.current.scrollLeft = scrollIndex * scrollAmount;
    }, [scrollIndex]);
 
    return (
        <div id={styles.mainContainer}>
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.top}>
                    <div className={styles.name}>
                        <h3>Technology</h3>
                    </div>
                    {/* <div className={styles.btnContainer}>
                        <button onClick={() => handleScroll('left')}>
                            <HiArrowLeft color='#1c3681'/>
                        </button>
                        <button onClick={() => handleScroll('right')}>
                            <HiArrowRight color='#1c3681'/>
                        </button>
                    </div> */}
                </div>
                <div>
                    <p className={styles.spanText}>
                        Global Spark Tek Solutions help your organization realize its strategic goals. Our talented team has the expertise to excel in multiple IT disciplines, which can help with your company's IT requirements.


                    </p>
                </div>
            </div>
            <div className={styles.imgContainer} ref={containerRef}>
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className={styles.slide}>
                        {images.slice(slideIndex * 6, (slideIndex + 1) * 6).map((item, index) => (
                            <div key={index} className={styles.eachImg}>
                                <div className={styles.images}>
                                    <img src={item.src} alt={item.name} />
                                    <div className={styles.serv}>
                                    <p style={{ color: '#302a1f',fontWeight:'700',fontSize:'15px' }}>{item.name}</p>
                                        <button onClick={() => handleLearnMore(item.id)}>
                                            {item.title}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
        </div>
 
    );
};
 
export default CarouselServices;
 