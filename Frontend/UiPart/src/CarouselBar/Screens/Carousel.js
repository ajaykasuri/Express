// import React, { useState, useEffect } from 'react';
// import styles from '../Styles/Carousel.module.css';
 
 
// const slideContent = [
//     {
//         title: "Global Spark Tek Solutions",
//         subtitle: "Empowering Your Business with Cutting-Edge IT Innovation"
//     },
//     {
//         title: "Seamless IT Integration",
//         subtitle: "Streamline Operations with Tailored Technology Solutions"
//     },
//     {
//         title: "Database Mastery",
//         subtitle: "Optimizing Data Management for Scalable Growth"
//     },
//     {
//         title: "Cloud Transformation",
//         subtitle: "Scale Efficiently with Next-Gen Cloud Services"
//     },
//     {
//         title: "Future-Ready IT",
//         subtitle: "Driving Success Through Advanced Tech Strategies"
//     },
// ];
 
// const Carousel = ({ images }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isAnimating, setIsAnimating] = useState(false);
//     const totalImages = images.length;
 
//     useEffect(() => {
//         const interval = setInterval(() => {
//             goToNextSlide();
//         }, 3000); 
//         return () => clearInterval(interval);
//     }, []);
 
//     const goToNextSlide = () => {
//         if (isAnimating) return;
//         setIsAnimating(true);
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
//         setTimeout(() => setIsAnimating(false), 300);
//     };
 
//     const goToPreviousSlide = () => {
//         if (isAnimating) return;
//         setIsAnimating(true);
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
//         setTimeout(() => setIsAnimating(false), 300);
//     };
 
//     return (
//         <div className={styles.divContainer}>
//             <div className={styles.carouselSlide}>
//                 <button className={styles.carouselButtonPrev} onClick={goToPreviousSlide}>
//                     ❮
//                 </button>
//                 <div className={styles.slideContent}>
//                     <img
//                         src={images[currentIndex]}
//                         alt={`Slide ${currentIndex}`}
//                         className={styles.carouselImage}
//                     />
                 
//                     <div className={styles.overlayText}>
//                         <h2>{slideContent[currentIndex].title}</h2>
//                         <p style={{textAlign:'center'}}>{slideContent[currentIndex].subtitle}</p>
//                     </div>
//                 </div>
//                 <button className={styles.carouselButtonNext} onClick={goToNextSlide}>
//                     ❯
//                 </button>
//             </div>
//         </div>
//     );
// };
 
// export default Carousel;


import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1, { CarouselImage2, CarouselImage3, CarouselImage4, CarouselImage5 } from './images';
import styles from '../Styles/Carousel.module.css';

function CarouselPage() {
  return (
    <div style={{width:"100%",height:'50%'}}>
    <Carousel  indicators={true}>
      <Carousel.Item interval={500}>
        <CarouselImage1 text="First slide" />
        <Carousel.Caption className={styles.overlayText}>
        <h3 className={styles.header}>
  Global Spark Tek Solutions
</h3>
<p className={styles.para}>Empowering Your Business with Cutting-Edge IT Innovation.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage2 text="Second slide" />
        <Carousel.Caption className={styles.overlayText}>
          <h3 className={styles.header}>Seamless IT Integration</h3>
          <p className={styles.para}>Streamline Operations with Tailored Technology Solutions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage3 text="Third slide" />
        <Carousel.Caption className={styles.overlayText}>
        <h3 className={styles.header}>Database Mastery</h3>
        <p className={styles.para}>
          Optimizing Data Management for Scalable Growth
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage4 text="Four slide" />
        <Carousel.Caption className={styles.overlayText}>
          <h3 className={styles.header}>
            Cloud Transformation</h3>
            <p className={styles.para}>
          Scale Efficiently with Next-Gen Cloud Services
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage5 text="Fifth slide" />
        <Carousel.Caption className={styles.overlayText}>
        <h3 className={styles.header}>
            
            Future-Ready IT</h3>
            <p className={styles.para}>
          Driving Success Through Advanced Tech Strategies.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

 
  );
}

export default CarouselPage;









