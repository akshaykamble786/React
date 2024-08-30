import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  return (
    <section className="relative bg-gray-200 rounded-3xl shadow-lg overflow-hidden mx-4 md:mx-20 mt-2 mb-10">
      {/* Image Slider */}
      <div className="relative">
        <Slider {...settings} className="slider-wrapper">
          <div className="h-[80vh] md:h-[90vh]">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724995717/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/30082024/HP_Rotating_Laptops_30Aug2024_sp5itm.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[80vh] md:h-[90vh]">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724936305/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Aug/30082024/Desktop/HP_Rotating_TV_30Aug2024_r4poss.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[80vh] md:h-[90vh]">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724995717/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/30082024/HP_Rotating_PS_30Aug2024_fgadk2.jpg"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[80vh] md:h-[90vh]">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724995718/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/August/30082024/HP_Rotating_App_30Aug2024_rzd5nv.jpg"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
