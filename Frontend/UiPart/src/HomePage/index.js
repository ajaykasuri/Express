import Activity from "../Activities/Screens/Activity"
import Blogs from "../Blogs/Screens/Blogs"
import Carousel from "../CarouselBar/Screens/Carousel"
import Clients from "../Client/Screens/Clients"
import Footer from "../Home/Screens/Footer"
import Header from "../Home/Screens/Header"
import CarouselServices from "../Services/Screens/CarouselServices"
import ContentFooter from "../Services/Screens/ContentFooter"
import ServicesHome from "../Serviceslatest/Screens/ServicesHome"



const imageList = [
    // require('../Assets/gstsWelcomeScreen.jfif'),
    // require('../Assets/carouselImage1.jpg'),
    // require('../Assets/carouselImage2.jpg'),
    // require('../Assets/carouselImage3.jpg'),
    require('../Assets/carouselImage12.jpg'),
    // require('../Assets/carouselImage5.jpg'),
    require('../Assets/carouselImage7.jpg'),
    require('../Assets/carouselImage9.jpg'),
    require('../Assets/carouselImage10.jpg'),
    require('../Assets/carouselImage11.jpg'),









  ];




const HomePage = ()=>{


    return(
<>
 <Header />
      <Carousel images={imageList} />
    
      
      <Activity />

      <ServicesHome />

      <section id="services">
  <CarouselServices />
</section>



{/* <section id="blogs">
  <Blogs />
</section> */}

      
      <Clients />
      <ContentFooter />
      <Footer /> 
  



</>
    )
}


export default HomePage